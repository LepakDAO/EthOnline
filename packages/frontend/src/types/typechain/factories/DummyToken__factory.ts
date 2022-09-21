/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers'
import type { Provider, TransactionRequest } from '@ethersproject/providers'
import type { PromiseOrValue } from '../common'
import type { DummyToken, DummyTokenInterface } from '../DummyToken'

const _abi = [
  {
    inputs: [
      {
        internalType: 'string',
        name: 'name',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'symbol',
        type: 'string',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Approval',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Transfer',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
    ],
    name: 'allowance',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'approve',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'balanceOf',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'decimals',
    outputs: [
      {
        internalType: 'uint8',
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'subtractedValue',
        type: 'uint256',
      },
    ],
    name: 'decreaseAllowance',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'addedValue',
        type: 'uint256',
      },
    ],
    name: 'increaseAllowance',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'name',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'priceFeed',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'symbol',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalSupply',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'transfer',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'transferFrom',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]

const _bytecode =
  '0x60a06040523480156200001157600080fd5b50604051620019c0380380620019c0833981810160405281019062000037919062000495565b818181600390805190602001906200005192919062000248565b5080600490805190602001906200006a92919062000248565b505050620000893369021e19e0c9bab2400000620000c560201b60201c565b3373ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815250505050620006c6565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141562000138576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200012f906200057b565b60405180910390fd5b6200014c600083836200023e60201b60201c565b8060026000828254620001609190620005d6565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254620001b79190620005d6565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516200021e919062000644565b60405180910390a36200023a600083836200024360201b60201c565b5050565b505050565b505050565b828054620002569062000690565b90600052602060002090601f0160209004810192826200027a5760008555620002c6565b82601f106200029557805160ff1916838001178555620002c6565b82800160010185558215620002c6579182015b82811115620002c5578251825591602001919060010190620002a8565b5b509050620002d59190620002d9565b5090565b5b80821115620002f4576000816000905550600101620002da565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620003618262000316565b810181811067ffffffffffffffff8211171562000383576200038262000327565b5b80604052505050565b600062000398620002f8565b9050620003a6828262000356565b919050565b600067ffffffffffffffff821115620003c957620003c862000327565b5b620003d48262000316565b9050602081019050919050565b60005b8381101562000401578082015181840152602081019050620003e4565b8381111562000411576000848401525b50505050565b60006200042e6200042884620003ab565b6200038c565b9050828152602081018484840111156200044d576200044c62000311565b5b6200045a848285620003e1565b509392505050565b600082601f8301126200047a57620004796200030c565b5b81516200048c84826020860162000417565b91505092915050565b60008060408385031215620004af57620004ae62000302565b5b600083015167ffffffffffffffff811115620004d057620004cf62000307565b5b620004de8582860162000462565b925050602083015167ffffffffffffffff81111562000502576200050162000307565b5b620005108582860162000462565b9150509250929050565b600082825260208201905092915050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b600062000563601f836200051a565b915062000570826200052b565b602082019050919050565b60006020820190508181036000830152620005968162000554565b9050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000620005e3826200059d565b9150620005f0836200059d565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115620006285762000627620005a7565b5b828201905092915050565b6200063e816200059d565b82525050565b60006020820190506200065b600083018462000633565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620006a957607f821691505b60208210811415620006c057620006bf62000661565b5b50919050565b6080516112e1620006df600039600050506112e16000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c806370a082311161007157806370a08231146101a3578063741bef1a146101d357806395d89b41146101f1578063a457c2d71461020f578063a9059cbb1461023f578063dd62ed3e1461026f576100b4565b806306fdde03146100b9578063095ea7b3146100d757806318160ddd1461010757806323b872dd14610125578063313ce567146101555780633950935114610173575b600080fd5b6100c161029f565b6040516100ce9190610b71565b60405180910390f35b6100f160048036038101906100ec9190610c2c565b610331565b6040516100fe9190610c87565b60405180910390f35b61010f610354565b60405161011c9190610cb1565b60405180910390f35b61013f600480360381019061013a9190610ccc565b61035e565b60405161014c9190610c87565b60405180910390f35b61015d61038d565b60405161016a9190610d3b565b60405180910390f35b61018d60048036038101906101889190610c2c565b610396565b60405161019a9190610c87565b60405180910390f35b6101bd60048036038101906101b89190610d56565b6103cd565b6040516101ca9190610cb1565b60405180910390f35b6101db610415565b6040516101e89190610d92565b60405180910390f35b6101f961043b565b6040516102069190610b71565b60405180910390f35b61022960048036038101906102249190610c2c565b6104cd565b6040516102369190610c87565b60405180910390f35b61025960048036038101906102549190610c2c565b610544565b6040516102669190610c87565b60405180910390f35b61028960048036038101906102849190610dad565b610567565b6040516102969190610cb1565b60405180910390f35b6060600380546102ae90610e1c565b80601f01602080910402602001604051908101604052809291908181526020018280546102da90610e1c565b80156103275780601f106102fc57610100808354040283529160200191610327565b820191906000526020600020905b81548152906001019060200180831161030a57829003601f168201915b5050505050905090565b60008061033c6105ee565b90506103498185856105f6565b600191505092915050565b6000600254905090565b6000806103696105ee565b90506103768582856107c1565b61038185858561084d565b60019150509392505050565b60006012905090565b6000806103a16105ee565b90506103c28185856103b38589610567565b6103bd9190610e7d565b6105f6565b600191505092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60606004805461044a90610e1c565b80601f016020809104026020016040519081016040528092919081815260200182805461047690610e1c565b80156104c35780601f10610498576101008083540402835291602001916104c3565b820191906000526020600020905b8154815290600101906020018083116104a657829003601f168201915b5050505050905090565b6000806104d86105ee565b905060006104e68286610567565b90508381101561052b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161052290610f45565b60405180910390fd5b61053882868684036105f6565b60019250505092915050565b60008061054f6105ee565b905061055c81858561084d565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610666576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161065d90610fd7565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156106d6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106cd90611069565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040516107b49190610cb1565b60405180910390a3505050565b60006107cd8484610567565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146108475781811015610839576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610830906110d5565b60405180910390fd5b61084684848484036105f6565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156108bd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108b490611167565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561092d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610924906111f9565b60405180910390fd5b610938838383610ace565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050818110156109be576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109b59061128b565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610a519190610e7d565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610ab59190610cb1565b60405180910390a3610ac8848484610ad3565b50505050565b505050565b505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610b12578082015181840152602081019050610af7565b83811115610b21576000848401525b50505050565b6000601f19601f8301169050919050565b6000610b4382610ad8565b610b4d8185610ae3565b9350610b5d818560208601610af4565b610b6681610b27565b840191505092915050565b60006020820190508181036000830152610b8b8184610b38565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610bc382610b98565b9050919050565b610bd381610bb8565b8114610bde57600080fd5b50565b600081359050610bf081610bca565b92915050565b6000819050919050565b610c0981610bf6565b8114610c1457600080fd5b50565b600081359050610c2681610c00565b92915050565b60008060408385031215610c4357610c42610b93565b5b6000610c5185828601610be1565b9250506020610c6285828601610c17565b9150509250929050565b60008115159050919050565b610c8181610c6c565b82525050565b6000602082019050610c9c6000830184610c78565b92915050565b610cab81610bf6565b82525050565b6000602082019050610cc66000830184610ca2565b92915050565b600080600060608486031215610ce557610ce4610b93565b5b6000610cf386828701610be1565b9350506020610d0486828701610be1565b9250506040610d1586828701610c17565b9150509250925092565b600060ff82169050919050565b610d3581610d1f565b82525050565b6000602082019050610d506000830184610d2c565b92915050565b600060208284031215610d6c57610d6b610b93565b5b6000610d7a84828501610be1565b91505092915050565b610d8c81610bb8565b82525050565b6000602082019050610da76000830184610d83565b92915050565b60008060408385031215610dc457610dc3610b93565b5b6000610dd285828601610be1565b9250506020610de385828601610be1565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610e3457607f821691505b60208210811415610e4857610e47610ded565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610e8882610bf6565b9150610e9383610bf6565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610ec857610ec7610e4e565b5b828201905092915050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b6000610f2f602583610ae3565b9150610f3a82610ed3565b604082019050919050565b60006020820190508181036000830152610f5e81610f22565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000610fc1602483610ae3565b9150610fcc82610f65565b604082019050919050565b60006020820190508181036000830152610ff081610fb4565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b6000611053602283610ae3565b915061105e82610ff7565b604082019050919050565b6000602082019050818103600083015261108281611046565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b60006110bf601d83610ae3565b91506110ca82611089565b602082019050919050565b600060208201905081810360008301526110ee816110b2565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b6000611151602583610ae3565b915061115c826110f5565b604082019050919050565b6000602082019050818103600083015261118081611144565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b60006111e3602383610ae3565b91506111ee82611187565b604082019050919050565b60006020820190508181036000830152611212816111d6565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b6000611275602683610ae3565b915061128082611219565b604082019050919050565b600060208201905081810360008301526112a481611268565b905091905056fea2646970667358221220e3aa2692e9374659f1212ead27c2c71fd7c10bd147932d69e591ee134be04fd264736f6c63430008090033'

type DummyTokenConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>

const isSuperArgs = (
  xs: DummyTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1

export class DummyToken__factory extends ContractFactory {
  constructor(...args: DummyTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args)
    } else {
      super(_abi, _bytecode, args[0])
    }
  }

  override deploy(
    name: PromiseOrValue<string>,
    symbol: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<DummyToken> {
    return super.deploy(name, symbol, overrides || {}) as Promise<DummyToken>
  }
  override getDeployTransaction(
    name: PromiseOrValue<string>,
    symbol: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name, symbol, overrides || {})
  }
  override attach(address: string): DummyToken {
    return super.attach(address) as DummyToken
  }
  override connect(signer: Signer): DummyToken__factory {
    return super.connect(signer) as DummyToken__factory
  }

  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): DummyTokenInterface {
    return new utils.Interface(_abi) as DummyTokenInterface
  }
  static connect(address: string, signerOrProvider: Signer | Provider): DummyToken {
    return new Contract(address, _abi, signerOrProvider) as DummyToken
  }
}