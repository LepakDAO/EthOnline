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
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers'
import type { FunctionFragment, Result, EventFragment } from '@ethersproject/abi'
import type { Listener, Provider } from '@ethersproject/providers'
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from '../common'

export interface LepakCoreInterface extends utils.Interface {
  functions: {
    'UserInfoURI(address)': FunctionFragment
    'getMods()': FunctionFragment
    'getwhitelistedToken()': FunctionFragment
    'isMember(address)': FunctionFragment
    'isMod(address)': FunctionFragment
    'isWhitelistedToken(address)': FunctionFragment
    'joinWithERC20(address)': FunctionFragment
    'joinWithEth(string,address,uint256,uint256,uint256[8])': FunctionFragment
    'joinWithoutEth(string,address,uint256,uint256,uint256[8])': FunctionFragment
    'modLimit()': FunctionFragment
    'mods(uint256)': FunctionFragment
    'oracleAddr()': FunctionFragment
    'owner()': FunctionFragment
    'payForTeam(address[])': FunctionFragment
    'renounceOwnership()': FunctionFragment
    'setMembershipPrice(uint256)': FunctionFragment
    'setMods(address[])': FunctionFragment
    'setOracle(address)': FunctionFragment
    'setTreasury(address)': FunctionFragment
    'transferOwnership(address)': FunctionFragment
    'treasury_addr()': FunctionFragment
    'usersPaid(address)': FunctionFragment
    'whitelistToken(address)': FunctionFragment
  }

  getFunction(
    nameOrSignatureOrTopic:
      | 'UserInfoURI'
      | 'getMods'
      | 'getwhitelistedToken'
      | 'isMember'
      | 'isMod'
      | 'isWhitelistedToken'
      | 'joinWithERC20'
      | 'joinWithEth'
      | 'joinWithoutEth'
      | 'modLimit'
      | 'mods'
      | 'oracleAddr'
      | 'owner'
      | 'payForTeam'
      | 'renounceOwnership'
      | 'setMembershipPrice'
      | 'setMods'
      | 'setOracle'
      | 'setTreasury'
      | 'transferOwnership'
      | 'treasury_addr'
      | 'usersPaid'
      | 'whitelistToken'
  ): FunctionFragment

  encodeFunctionData(functionFragment: 'UserInfoURI', values: [PromiseOrValue<string>]): string
  encodeFunctionData(functionFragment: 'getMods', values?: undefined): string
  encodeFunctionData(functionFragment: 'getwhitelistedToken', values?: undefined): string
  encodeFunctionData(functionFragment: 'isMember', values: [PromiseOrValue<string>]): string
  encodeFunctionData(functionFragment: 'isMod', values: [PromiseOrValue<string>]): string
  encodeFunctionData(
    functionFragment: 'isWhitelistedToken',
    values: [PromiseOrValue<string>]
  ): string
  encodeFunctionData(functionFragment: 'joinWithERC20', values: [PromiseOrValue<string>]): string
  encodeFunctionData(
    functionFragment: 'joinWithEth',
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>[]
    ]
  ): string
  encodeFunctionData(
    functionFragment: 'joinWithoutEth',
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>[]
    ]
  ): string
  encodeFunctionData(functionFragment: 'modLimit', values?: undefined): string
  encodeFunctionData(functionFragment: 'mods', values: [PromiseOrValue<BigNumberish>]): string
  encodeFunctionData(functionFragment: 'oracleAddr', values?: undefined): string
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string
  encodeFunctionData(functionFragment: 'payForTeam', values: [PromiseOrValue<string>[]]): string
  encodeFunctionData(functionFragment: 'renounceOwnership', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'setMembershipPrice',
    values: [PromiseOrValue<BigNumberish>]
  ): string
  encodeFunctionData(functionFragment: 'setMods', values: [PromiseOrValue<string>[]]): string
  encodeFunctionData(functionFragment: 'setOracle', values: [PromiseOrValue<string>]): string
  encodeFunctionData(functionFragment: 'setTreasury', values: [PromiseOrValue<string>]): string
  encodeFunctionData(
    functionFragment: 'transferOwnership',
    values: [PromiseOrValue<string>]
  ): string
  encodeFunctionData(functionFragment: 'treasury_addr', values?: undefined): string
  encodeFunctionData(functionFragment: 'usersPaid', values: [PromiseOrValue<string>]): string
  encodeFunctionData(functionFragment: 'whitelistToken', values: [PromiseOrValue<string>]): string

  decodeFunctionResult(functionFragment: 'UserInfoURI', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getMods', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getwhitelistedToken', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'isMember', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'isMod', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'isWhitelistedToken', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'joinWithERC20', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'joinWithEth', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'joinWithoutEth', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'modLimit', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'mods', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'oracleAddr', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'payForTeam', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'renounceOwnership', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'setMembershipPrice', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'setMods', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'setOracle', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'setTreasury', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'transferOwnership', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'treasury_addr', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'usersPaid', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'whitelistToken', data: BytesLike): Result

  events: {
    'MembershipPriceUpdated(uint256)': EventFragment
    'ModsUpdated(address[])': EventFragment
    'NewMemberEth(address,uint256)': EventFragment
    'NewTeam(uint256)': EventFragment
    'OwnershipTransferred(address,address)': EventFragment
    'newMember(address,address,uint256)': EventFragment
  }

  getEvent(nameOrSignatureOrTopic: 'MembershipPriceUpdated'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'ModsUpdated'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'NewMemberEth'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'NewTeam'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'newMember'): EventFragment
}

export interface MembershipPriceUpdatedEventObject {
  new_price: BigNumber
}
export type MembershipPriceUpdatedEvent = TypedEvent<[BigNumber], MembershipPriceUpdatedEventObject>

export type MembershipPriceUpdatedEventFilter = TypedEventFilter<MembershipPriceUpdatedEvent>

export interface ModsUpdatedEventObject {
  new_mods: string[]
}
export type ModsUpdatedEvent = TypedEvent<[string[]], ModsUpdatedEventObject>

export type ModsUpdatedEventFilter = TypedEventFilter<ModsUpdatedEvent>

export interface NewMemberEthEventObject {
  member: string
  fee: BigNumber
}
export type NewMemberEthEvent = TypedEvent<[string, BigNumber], NewMemberEthEventObject>

export type NewMemberEthEventFilter = TypedEventFilter<NewMemberEthEvent>

export interface NewTeamEventObject {
  n_members: BigNumber
}
export type NewTeamEvent = TypedEvent<[BigNumber], NewTeamEventObject>

export type NewTeamEventFilter = TypedEventFilter<NewTeamEvent>

export interface OwnershipTransferredEventObject {
  previousOwner: string
  newOwner: string
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>

export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>

export interface newMemberEventObject {
  member: string
  token_addr: string
  fee: BigNumber
}
export type newMemberEvent = TypedEvent<[string, string, BigNumber], newMemberEventObject>

export type newMemberEventFilter = TypedEventFilter<newMemberEvent>

export interface LepakCore extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  interface: LepakCoreInterface

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
    UserInfoURI(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>

    getMods(overrides?: CallOverrides): Promise<[string[]]>

    getwhitelistedToken(overrides?: CallOverrides): Promise<[string[]]>

    isMember(_user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>

    isMod(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>

    isWhitelistedToken(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>

    joinWithERC20(
      _token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    joinWithEth(
      infoURI: PromiseOrValue<string>,
      _caller: PromiseOrValue<string>,
      root: PromiseOrValue<BigNumberish>,
      nullifierHash: PromiseOrValue<BigNumberish>,
      proof: PromiseOrValue<BigNumberish>[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    joinWithoutEth(
      infoURI: PromiseOrValue<string>,
      _caller: PromiseOrValue<string>,
      root: PromiseOrValue<BigNumberish>,
      nullifierHash: PromiseOrValue<BigNumberish>,
      proof: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    modLimit(overrides?: CallOverrides): Promise<[number]>

    mods(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>

    oracleAddr(overrides?: CallOverrides): Promise<[string]>

    owner(overrides?: CallOverrides): Promise<[string]>

    payForTeam(
      _members: PromiseOrValue<string>[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    setMembershipPrice(
      _newPrice: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    setMods(
      _newMods: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    setOracle(
      _newOracle: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    setTreasury(
      _newTreasury: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    treasury_addr(overrides?: CallOverrides): Promise<[string]>

    usersPaid(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>

    whitelistToken(
      _token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>
  }

  UserInfoURI(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>

  getMods(overrides?: CallOverrides): Promise<string[]>

  getwhitelistedToken(overrides?: CallOverrides): Promise<string[]>

  isMember(_user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>

  isMod(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>

  isWhitelistedToken(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>

  joinWithERC20(
    _token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  joinWithEth(
    infoURI: PromiseOrValue<string>,
    _caller: PromiseOrValue<string>,
    root: PromiseOrValue<BigNumberish>,
    nullifierHash: PromiseOrValue<BigNumberish>,
    proof: PromiseOrValue<BigNumberish>[],
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  joinWithoutEth(
    infoURI: PromiseOrValue<string>,
    _caller: PromiseOrValue<string>,
    root: PromiseOrValue<BigNumberish>,
    nullifierHash: PromiseOrValue<BigNumberish>,
    proof: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  modLimit(overrides?: CallOverrides): Promise<number>

  mods(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>

  oracleAddr(overrides?: CallOverrides): Promise<string>

  owner(overrides?: CallOverrides): Promise<string>

  payForTeam(
    _members: PromiseOrValue<string>[],
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  setMembershipPrice(
    _newPrice: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  setMods(
    _newMods: PromiseOrValue<string>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  setOracle(
    _newOracle: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  setTreasury(
    _newTreasury: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  treasury_addr(overrides?: CallOverrides): Promise<string>

  usersPaid(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>

  whitelistToken(
    _token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  callStatic: {
    UserInfoURI(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>

    getMods(overrides?: CallOverrides): Promise<string[]>

    getwhitelistedToken(overrides?: CallOverrides): Promise<string[]>

    isMember(_user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>

    isMod(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>

    isWhitelistedToken(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>

    joinWithERC20(_token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>

    joinWithEth(
      infoURI: PromiseOrValue<string>,
      _caller: PromiseOrValue<string>,
      root: PromiseOrValue<BigNumberish>,
      nullifierHash: PromiseOrValue<BigNumberish>,
      proof: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>

    joinWithoutEth(
      infoURI: PromiseOrValue<string>,
      _caller: PromiseOrValue<string>,
      root: PromiseOrValue<BigNumberish>,
      nullifierHash: PromiseOrValue<BigNumberish>,
      proof: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>

    modLimit(overrides?: CallOverrides): Promise<number>

    mods(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>

    oracleAddr(overrides?: CallOverrides): Promise<string>

    owner(overrides?: CallOverrides): Promise<string>

    payForTeam(_members: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<void>

    renounceOwnership(overrides?: CallOverrides): Promise<void>

    setMembershipPrice(
      _newPrice: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>

    setMods(_newMods: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<void>

    setOracle(_newOracle: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>

    setTreasury(_newTreasury: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>

    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>

    treasury_addr(overrides?: CallOverrides): Promise<string>

    usersPaid(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>

    whitelistToken(_token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>
  }

  filters: {
    'MembershipPriceUpdated(uint256)'(new_price?: null): MembershipPriceUpdatedEventFilter
    MembershipPriceUpdated(new_price?: null): MembershipPriceUpdatedEventFilter

    'ModsUpdated(address[])'(new_mods?: null): ModsUpdatedEventFilter
    ModsUpdated(new_mods?: null): ModsUpdatedEventFilter

    'NewMemberEth(address,uint256)'(member?: null, fee?: null): NewMemberEthEventFilter
    NewMemberEth(member?: null, fee?: null): NewMemberEthEventFilter

    'NewTeam(uint256)'(n_members?: null): NewTeamEventFilter
    NewTeam(n_members?: null): NewTeamEventFilter

    'OwnershipTransferred(address,address)'(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter

    'newMember(address,address,uint256)'(
      member?: null,
      token_addr?: null,
      fee?: null
    ): newMemberEventFilter
    newMember(member?: null, token_addr?: null, fee?: null): newMemberEventFilter
  }

  estimateGas: {
    UserInfoURI(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>

    getMods(overrides?: CallOverrides): Promise<BigNumber>

    getwhitelistedToken(overrides?: CallOverrides): Promise<BigNumber>

    isMember(_user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>

    isMod(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>

    isWhitelistedToken(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>

    joinWithERC20(
      _token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    joinWithEth(
      infoURI: PromiseOrValue<string>,
      _caller: PromiseOrValue<string>,
      root: PromiseOrValue<BigNumberish>,
      nullifierHash: PromiseOrValue<BigNumberish>,
      proof: PromiseOrValue<BigNumberish>[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    joinWithoutEth(
      infoURI: PromiseOrValue<string>,
      _caller: PromiseOrValue<string>,
      root: PromiseOrValue<BigNumberish>,
      nullifierHash: PromiseOrValue<BigNumberish>,
      proof: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    modLimit(overrides?: CallOverrides): Promise<BigNumber>

    mods(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>

    oracleAddr(overrides?: CallOverrides): Promise<BigNumber>

    owner(overrides?: CallOverrides): Promise<BigNumber>

    payForTeam(
      _members: PromiseOrValue<string>[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>

    setMembershipPrice(
      _newPrice: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    setMods(
      _newMods: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    setOracle(
      _newOracle: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    setTreasury(
      _newTreasury: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    treasury_addr(overrides?: CallOverrides): Promise<BigNumber>

    usersPaid(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>

    whitelistToken(
      _token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>
  }

  populateTransaction: {
    UserInfoURI(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    getMods(overrides?: CallOverrides): Promise<PopulatedTransaction>

    getwhitelistedToken(overrides?: CallOverrides): Promise<PopulatedTransaction>

    isMember(
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    isMod(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>

    isWhitelistedToken(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    joinWithERC20(
      _token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    joinWithEth(
      infoURI: PromiseOrValue<string>,
      _caller: PromiseOrValue<string>,
      root: PromiseOrValue<BigNumberish>,
      nullifierHash: PromiseOrValue<BigNumberish>,
      proof: PromiseOrValue<BigNumberish>[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    joinWithoutEth(
      infoURI: PromiseOrValue<string>,
      _caller: PromiseOrValue<string>,
      root: PromiseOrValue<BigNumberish>,
      nullifierHash: PromiseOrValue<BigNumberish>,
      proof: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    modLimit(overrides?: CallOverrides): Promise<PopulatedTransaction>

    mods(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    oracleAddr(overrides?: CallOverrides): Promise<PopulatedTransaction>

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>

    payForTeam(
      _members: PromiseOrValue<string>[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    setMembershipPrice(
      _newPrice: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    setMods(
      _newMods: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    setOracle(
      _newOracle: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    setTreasury(
      _newTreasury: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    treasury_addr(overrides?: CallOverrides): Promise<PopulatedTransaction>

    usersPaid(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    whitelistToken(
      _token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>
  }
}