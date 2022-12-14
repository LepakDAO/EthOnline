/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
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

export interface ILepakCoreInterface extends utils.Interface {
  functions: {
    'isMember(address)': FunctionFragment
    'isMod(address)': FunctionFragment
  }

  getFunction(nameOrSignatureOrTopic: 'isMember' | 'isMod'): FunctionFragment

  encodeFunctionData(functionFragment: 'isMember', values: [PromiseOrValue<string>]): string
  encodeFunctionData(functionFragment: 'isMod', values: [PromiseOrValue<string>]): string

  decodeFunctionResult(functionFragment: 'isMember', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'isMod', data: BytesLike): Result

  events: {}
}

export interface ILepakCore extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  interface: ILepakCoreInterface

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
    isMember(_user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>

    isMod(_mod: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>
  }

  isMember(_user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>

  isMod(_mod: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>

  callStatic: {
    isMember(_user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>

    isMod(_mod: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>
  }

  filters: {}

  estimateGas: {
    isMember(_user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>

    isMod(_mod: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>
  }

  populateTransaction: {
    isMember(
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    isMod(_mod: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>
  }
}
