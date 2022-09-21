/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers'
import type { FunctionFragment, Result } from '@ethersproject/abi'
import type { Listener, Provider } from '@ethersproject/providers'
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from '../common'

export interface ILepakMembershipInterface extends utils.Interface {
  functions: {
    'balanceOf(address)': FunctionFragment
    'currentPriceEth()': FunctionFragment
    'provide(address)': FunctionFragment
    'revoke(address)': FunctionFragment
    'setPriceEth(uint256)': FunctionFragment
    'tokenURI(uint256)': FunctionFragment
    'updateThresholds(uint256[3])': FunctionFragment
  }

  getFunction(
    nameOrSignatureOrTopic:
      | 'balanceOf'
      | 'currentPriceEth'
      | 'provide'
      | 'revoke'
      | 'setPriceEth'
      | 'tokenURI'
      | 'updateThresholds'
  ): FunctionFragment

  encodeFunctionData(functionFragment: 'balanceOf', values: [PromiseOrValue<string>]): string
  encodeFunctionData(functionFragment: 'currentPriceEth', values?: undefined): string
  encodeFunctionData(functionFragment: 'provide', values: [PromiseOrValue<string>]): string
  encodeFunctionData(functionFragment: 'revoke', values: [PromiseOrValue<string>]): string
  encodeFunctionData(
    functionFragment: 'setPriceEth',
    values: [PromiseOrValue<BigNumberish>]
  ): string
  encodeFunctionData(functionFragment: 'tokenURI', values: [PromiseOrValue<BigNumberish>]): string
  encodeFunctionData(
    functionFragment: 'updateThresholds',
    values: [
      [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
    ]
  ): string

  decodeFunctionResult(functionFragment: 'balanceOf', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'currentPriceEth', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'provide', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'revoke', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'setPriceEth', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'tokenURI', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'updateThresholds', data: BytesLike): Result

  events: {}
}

export interface ILepakMembership extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  interface: ILepakMembershipInterface

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>
  listeners(eventName?: string): Array<Listener>
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this
  removeAllListeners(eventName?: string): this
  off: OnEvent<this>
  on: OnEvent<this>
  once: OnEvent<this>
  removeListener: OnEvent<this>

  functions: {
    balanceOf(_user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>

    currentPriceEth(overrides?: CallOverrides): Promise<[BigNumber]>

    provide(
      _user: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    revoke(
      _user: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    setPriceEth(
      _newPrice: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    tokenURI(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[void]>

    updateThresholds(
      _newThresholds: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
      ],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>
  }

  balanceOf(_user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>

  currentPriceEth(overrides?: CallOverrides): Promise<BigNumber>

  provide(
    _user: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  revoke(
    _user: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  setPriceEth(
    _newPrice: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  tokenURI(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>

  updateThresholds(
    _newThresholds: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  callStatic: {
    balanceOf(_user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>

    currentPriceEth(overrides?: CallOverrides): Promise<BigNumber>

    provide(_user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>

    revoke(_user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>

    setPriceEth(_newPrice: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>

    tokenURI(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>

    updateThresholds(
      _newThresholds: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
      ],
      overrides?: CallOverrides
    ): Promise<void>
  }

  filters: {}

  estimateGas: {
    balanceOf(_user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>

    currentPriceEth(overrides?: CallOverrides): Promise<BigNumber>

    provide(
      _user: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    revoke(
      _user: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    setPriceEth(
      _newPrice: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    tokenURI(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>

    updateThresholds(
      _newThresholds: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
      ],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>
  }

  populateTransaction: {
    balanceOf(
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    currentPriceEth(overrides?: CallOverrides): Promise<PopulatedTransaction>

    provide(
      _user: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    revoke(
      _user: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    setPriceEth(
      _newPrice: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    tokenURI(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    updateThresholds(
      _newThresholds: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
      ],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>
  }
}