pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import { ByteHasher } from "./helpers/ByteHasher.sol";
import { IWorldID } from "./Interfaces/IWorldId.sol";
import { ILepakMembership } from "./Interfaces/ILepakMembership.sol";

struct shortProposal {
    address targetContract;
    string call;
}

interface ITestOracle {

    /** 
    **  @dev wrapper for oracles that we want to use in our protocol / contract still under development
    **  @note currently this oracle will return data that is predefined
        we are looking forward to integrate different oracles in our contracts to keep it safer
        all prices are in usd
    **/
    function priceOfETH() external view returns (uint256);
    function priceOfERC20(address _asset) external view returns (uint256); 
}

contract LepakCore is Ownable{
    using ByteHasher for bytes;
    using SafeMath for uint256;

    event NewMemberEth(address member,uint256 fee);
    event newMember(address member,address token_addr, uint256 fee);
    event NewTeam(uint256 n_members);
    event ModsUpdated(address[] new_mods);
    event MembershipPriceUpdated(uint256 new_price);

    mapping(address => string) public UserInfoURI;
    mapping(address => bool) public usersPaid;
    mapping(address => bool) public isMod;
    mapping(address => bool) public isWhitelistedToken;
    uint8 public modLimit = 5;
    ILepakMembership membership;
    address[] public mods;
    address public oracleAddr;
    address public treasury_addr;
    address[] whitelistedToken;
    
    /**
    ** @dev worldcoin verification
    **/
    
    IWorldID internal worldId;
    string internal action_id;
    uint256 internal groupId = 1;
    mapping(uint256 => bool) internal nullifierHashes;
    error InvalidNullifier();

    constructor(IWorldID _worldId, address _membershipAddr, string memory _action_id) {
        worldId = _worldId;
        membership = ILepakMembership(_membershipAddr);
        action_id = _action_id;
    }

    modifier onlyMod () {
        require (isMod[msg.sender], "caller is not a moderator");
        _;
    }

    modifier onlyModOrOwner () {
        require (isMod[msg.sender] || super.owner() == msg.sender, "caller is not a moderator or owner");
        _;
    }

    function payForTeam(address[] calldata _members) external payable {
        uint256 len = _members.length;     
        require(msg.value >= len.mul(membership.currentPriceEth()),"Not enough funds");
        for(uint i=0;i<len;i++){
            usersPaid[_members[i]] = true;
        }
        emit NewTeam(len);
    }

    /**
    ** @dev DUMMY FUNCTION
    ** @note this function is for hackathon, allows to test the integration of our contract. 
    **/

    function joinWithoutEth(
        string memory infoURI,
        address _caller,
        uint256 root,
        uint256 nullifierHash,
        uint256[8] calldata proof
    ) external {
        // require(usersPaid[msg.sender],"user hasnt paid yet");
        _verifyPoP(_caller,root,nullifierHash,proof);
        UserInfoURI[msg.sender] = infoURI;

        //uncomment this
        membership.provide(msg.sender);
        emit NewMemberEth(msg.sender, membership.currentPriceEth());
    }

    function joinWithEth(
        string calldata infoURI,
        address _caller,
        uint256 root,
        uint256 nullifierHash,
        uint256[8] calldata proof
    ) external payable {
        require(msg.value >= membership.currentPriceEth(),"Not enough funds");
        _verifyPoP(_caller,root,nullifierHash,proof);
        UserInfoURI[msg.sender] = infoURI;
        membership.provide(msg.sender);
        emit NewMemberEth(msg.sender, msg.value);
    }

    /**
    ** @dev function to join with any token
    ** @note this is a dummy function, we need to modify according to number of decimals
    **/

    function joinWithERC20 (address _token) external {

        uint256 amountToTransfer = ITestOracle(oracleAddr).priceOfETH().mul(membership.currentPriceEth());
        amountToTransfer = amountToTransfer.div(ITestOracle(oracleAddr).priceOfERC20(_token));

        require(IERC20(_token).balanceOf(msg.sender)>amountToTransfer,"sender doesnt have enough funds");
        IERC20(_token).transferFrom(msg.sender, treasury_addr , amountToTransfer);
        emit newMember(msg.sender,_token,amountToTransfer);
    }

    /**
    ** @dev worldcoin verification
    **/

    function _verifyPoP(
        address caller,
        uint256 root,
        uint256 nullifierHash,
        uint256[8] calldata proof
    ) internal {

        if (nullifierHashes[nullifierHash]) revert InvalidNullifier();
        worldId.verifyProof(
            root,
            groupId,
            abi.encodePacked(caller).hashToField(),
            nullifierHash,
            abi.encodePacked(action_id).hashToField(),
            proof
        );

        // finally, we record they've done this, so they can't do it again (proof of uniqueness)
        nullifierHashes[nullifierHash] = true;

    }

    function setMods(address[] calldata _newMods) external onlyOwner {
        uint256 len = _newMods.length;
        uint256 prev_len = mods.length;
        address[] memory temp = new address[](len);

        require(len <= modLimit, "max number of mods is 5");

        for(uint256 i=0;i<prev_len;i++){
            isMod[mods[i]] = false;
        }
        for(uint256 i=0;i<len;i++){
            temp[i] = (_newMods[i]);
            isMod[_newMods[i]] = true;
        }
        mods = temp;

        emit ModsUpdated(temp);

    }
    function whitelistToken(address _token) external onlyOwner {
        isWhitelistedToken[_token] = true;
        whitelistedToken.push(_token);
    }
    function getwhitelistedToken() external view returns (address[] memory) {
        return whitelistedToken;
    }
    function setOracle(address _newOracle) external onlyOwner {
        oracleAddr = _newOracle;
    }
    function setTreasury(address _newTreasury) external onlyOwner {
        treasury_addr = _newTreasury;
    }
    function setMembershipPrice(uint256 _newPrice) external  onlyModOrOwner {
        membership.setPriceEth(_newPrice);
        emit MembershipPriceUpdated(_newPrice);
    }

    function getMods() external view returns (address[] memory){
        return mods;
    }
    function isMember(address _user) external view returns (bool){
        return (membership.balanceOf(_user) > uint256(0)
                || super.owner() == _user
                || isMod[_user]);
    }
}