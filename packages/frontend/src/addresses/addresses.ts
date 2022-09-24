import { ContractAddresses_1337 } from './1337'
import { ContractAddresses_256236330 } from './256236330'
import { ContractAddresses_80001 } from './80001'
export const ContractAddresses = {
  '1337': ContractAddresses_1337,
  '256236330': ContractAddresses_256236330,
  '80001': ContractAddresses_80001,
}
export type ContractAddressesKey = keyof typeof ContractAddresses
