import "usingtellor/contracts/UsingTellor.sol";

/** 
**  @title Oracle Manager
**  @dev currently this oracle manager only supports BTC & USDC, other coins will be added in the future
**  @author Carlos Ramos
**/
contract OracleManager is UsingTellor {

  uint256 public EthPrice;
  bytes32 public btcQueryId = 0xa6f013ee236804827b77696d350e9f0ac3e879328f2a3021d473a0b778ad78ac; // for btc in mumbai
  bytes32 public usdcQueryId = 0x8ee44cd434ed5b0e007eee581fbe0855336f3f84484e8d9989a620a4a49aa0f7; // for usdc in mumbai
  address payable public _tellorAddress = payable(0x840c23e39F9D029fFa888F47069aA6864f0401D7); // Mumbai
  constructor() UsingTellor(_tellorAddress) {}

  function getBTCPrice() external view returns (uint256 value){
      (bool _ifRetrieve, bytes memory _value, ) = getDataBefore(btcQueryId, block.timestamp - 2 hours);
      if(_ifRetrieve) {
          assembly {
            value := mload(add(_value, 0x20))
        }
      }
  }
  function getUSDCPrice() external view returns (uint256 value){
      (bool _ifRetrieve, bytes memory _value, ) = getDataBefore(usdcQueryId, block.timestamp - 2 hours);
      if(_ifRetrieve) {
          assembly {
            value := mload(add(_value, 0x20))
        }
      }
  }
}