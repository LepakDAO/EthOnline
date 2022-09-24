import "usingtellor/contracts/UsingTellor.sol";

contract EthTellorOracle is UsingTellor {

  uint256 public EthPrice;
  bytes32 public ethQueryId = 0x40aa71e5205fdc7bdb7d65f7ae41daca3820c5d3a8f62357a99eda3aa27244a3; // for matic in mumbai
  address payable public _tellorAddress = payable(0x840c23e39F9D029fFa888F47069aA6864f0401D7); // Mumbai
  constructor() UsingTellor(_tellorAddress) {}

  function getCurrentEthPrice() external view returns (uint256 value){
      (bool _ifRetrieve, bytes memory _value, ) = getDataBefore(ethQueryId, block.timestamp - 2 hours);
      if(_ifRetrieve) {
          assembly {
            value := mload(add(_value, 0x20))
        }
      }
  }
}