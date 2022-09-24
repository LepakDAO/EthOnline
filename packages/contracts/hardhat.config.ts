import '@nomicfoundation/hardhat-toolbox'
import '@nomiclabs/hardhat-vyper'
import * as dotenv from 'dotenv'
import 'hardhat-deploy'
import { HardhatUserConfig } from 'hardhat/config'
import path from 'path'
dotenv.config()

const accounts = [
  ...(process.env.PRIVATE_KEY_01 ? [`${process.env.PRIVATE_KEY_01}`] : []),
  ...(process.env.PRIVATE_KEY_02 ? [`${process.env.PRIVATE_KEY_02}`] : []),
]

const mnemonic = 'replace hover unaware super where filter stone fine garlic address matrix basic'

const config: HardhatUserConfig = {
  solidity: '0.8.9',
  vyper: {
    version: '0.3.3',
  },
  paths: {
    artifacts: path.resolve('../frontend/src/artifacts'),
  },
  networks: {
    hardhat: {
      chainId: 1337,
      // allowUnlimitedContractSize: false,
      // blockGasLimit: 20000000,
      //   forking: {
      //     url: "https://polygon-mumbai.g.alchemy.com/v2/${process.env.ALCHEMY_API_MUMBAI}",
      //     url: "https://eth-rinkeby.alchemyapi.io/v2/${process.env.ALCHEMY_API_RINKEBY}",
      //     url: "https://eth-mainnet.alchemyapi.io/v2/${process.env.ALCHEMY_API_MAINNET}",
      //   },
    },
    mumbai: {
      chainId: 80001,
      url: process.env.RPC_80001,
      accounts,
    },
    polygon: {
      chainId: 137,
      url: process.env.RPC_137,
      accounts,
    },
    skale: {
      chainId: 256236330,
      url: process.env.RPC_344435,
      accounts,
    },
    // goerli: {
    //   chainId: 5,
    //   url: process.env.RPC_5 || 'https://rpc.ankr.com/eth_goerli',
    //   accounts,
    // },
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
    governor: {
      default: 1,
    },
  },
  // etherscan: {
  //   apiKey: {
  //     polygonMumbai: process.env.POLYGONSCAN_API_KEY!,
  //     bscTestnet: process.env.BSCSCAN_API_KEY!,
  //     polygon : process.env.POLYGONSCAN_API_KEY!,
  //   },
  // },
}

export default config
