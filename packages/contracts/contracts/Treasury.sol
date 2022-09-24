// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.0;
import "@openzeppelin/contracts/access/Ownable.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./Interfaces/IAave.sol";

interface ILepakCore {
    function getwhitelistedToken() external view returns (address[] memory);
}

contract Treasury is Ownable {
    using SafeERC20 for IERC20;
    uint16 constant referralCode = 0;
    mapping(address => uint256) assetAmount;
    //polygon mainnet
    // address Pool = 0x794a61358D6845594F94dc1DB02A252b5b4814aD;
    // address PoolAddressRegistry = 0xa97684ead0e402dC232d5A977953DF7ECBaB3CDb;
    // mumbai
    address Pool = 0x0940ceaacBF4860d2F7BFA657121B2F26a1676B0;
    address PoolAddressRegistry = 0x5343b5bA672Ae99d627A1C87866b8E53F47Db2E6;
    address public core_addr;

    event performInvestment(address asset, uint256 amount);
    event withdrawInvestment(address asset, uint256 amount);

    // goerli
    // address Pool =0x18eE6714Bb1796b8172951D892Fb9f42a961C812;
    // address PoolAddressRegistry= 0xc4dCB5126a3AfEd129BC3668Ea19285A9f56D15D;

    // Transfer Ownership
    function transferOwner(address _newOwner) external onlyOwner {
        require(
            msg.sender == super.owner(),
            "Only owner can transfer ownership"
        );
        transferOwnership(_newOwner);
    }

    constructor( address _core_addr){
        core_addr = _core_addr;
    }

    /**
     * @dev Deposit the entire balance of any supported asset into Aave
     */
    function rebase() external onlyOwner {
        // msg.sender = LepakCore
        address[] memory whitelistedToken = ILepakCore(core_addr).getwhitelistedToken();
        for (uint256 i = 0; i < whitelistedToken.length; i++) {
            uint256 balance = IERC20(whitelistedToken[i]).balanceOf(
                address(this)
            );
            if (balance > 0) {
                _deposit(whitelistedToken[i], balance);
                assetAmount[whitelistedToken[i]] = balance;
            }
        }
    }

    /**
     * @dev Deposit asset into Aave, msg.sender = LepakCore
     * @param _asset Address of asset to deposit
     * @param _amount Amount of asset to deposit
     */
    function deposit(address _asset, uint256 _amount) external {
        _deposit(_asset, _amount);
    }

    /**
     * @dev Deposit asset into Aave
     * @param _asset Address of asset to deposit
     * @param _amount Amount of asset to deposit
     */
    function _deposit(address _asset, uint256 _amount) internal {
        require(_amount > 0, "Must deposit something");
        // Asset has to be approved
        // Following line also doubles as a check that we are depositing
        // an asset that we support.
        //emit Deposit(_asset, _getATokenFor(_asset), _amount);
        // V2 = deposit(), V3 = supply()
        _getPool().supply(_asset, _amount, address(this), referralCode);
        emit performInvestment(_asset, _amount);
    }

    // withdraw all back to Treasury contract
    function withdrawAll() external onlyOwner {
        // msg.sender = LepakCore
        address[] memory whitelistedToken = ILepakCore(core_addr).getwhitelistedToken();
        for (uint256 i = 0; i < whitelistedToken.length; i++) {
            uint256 balance = assetAmount[whitelistedToken[i]];
            if (balance > 0) {
                _withdraw(address(this), whitelistedToken[i], balance);
                assetAmount[whitelistedToken[i]] = 0;
            }
        }
    }

    // withdraw individual token
    function withdraw(
        address _recipient,
        address _asset,
        uint256 _amount
    ) external onlyOwner {
        _withdraw(_recipient, _asset, _amount);
    }

    // Core logic of withdraw
    function _withdraw(
        address _recipient,
        address _asset,
        uint256 _amount
    ) internal {
        require(_amount > 0, "Must withdraw something");
        require(_recipient != address(0), "Must specify recipient");

        // emit Withdrawal(_asset, _getATokenFor(_asset), _amount);
        uint256 withdrawAmount = _getPool().withdraw(
            _asset,
            _amount,
            address(this)
        );
        require(withdrawAmount == _amount, "Did not withdraw enough");
        emit withdrawInvestment(_asset, _amount);
        if (_recipient != address(this)) {
            // if not called by withdrawAll, transferback to recipient
            IERC20(_asset).safeTransfer(_recipient, _amount);
        }
    }

    /**
     * @dev Approve the spending of all assets by their corresponding aToken,
     *      if for some reason is it necessary.
     */
    function safeApproveAllTokens() external {
        address pool = address(_getPool());
        // approve the pool to spend the Asset
        address[] memory whitelistedToken = ILepakCore(core_addr).getwhitelistedToken();
        for (uint256 i = 0; i < whitelistedToken.length; i++) {
            // Safe approval
            IERC20(whitelistedToken[i]).safeApprove(pool, 0);
            IERC20(whitelistedToken[i]).safeApprove(pool, type(uint256).max);
        }
    }

    /**
     * @dev Get the current address of the Aave lending pool, which is the gateway to
     *      depositing.
     * @return Current lending pool implementation
     */
    function _getPool() internal view returns (IAavePool) {
        address lendingPool = IPoolAddressesProvider(PoolAddressRegistry)
            .getPool();
        require(lendingPool != address(0), "Lending pool does not exist");
        return IAavePool(lendingPool);
    }
}
