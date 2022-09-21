import { parseEther } from 'ethers/lib/utils'
import { DeployFunction } from 'hardhat-deploy/types'
import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { ethers } from 'hardhat'
import { saveFrontendAddressFiles } from '../shared/saveFrontendAddressFiles'

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre
  const { deploy } = deployments

  const { deployer, governor } = await getNamedAccounts()
  const worldCoinAddr = '0xABB70f7F39035586Da57B3c8136035f87AC0d2Aa'

  const dLepakMembership = await deploy('LepakMembership', {
    from: deployer,
    args: ['Lepak SBT', 'LPK', 'baseuri/'],
    log: true,
  })

  const dLepakCore = await deploy('LepakCore', {
    from: deployer,
    args: [worldCoinAddr, dLepakMembership.address, 'wid_staging_85f9d1b6ab3027c3d5026fbb30a41998'],
    log: true,
  })
  const dLepakLifestyle = await deploy('LepakLifestyle', {
    from: deployer,
    args: [dLepakCore.address],
    log: true,
  })

  const sGovernor = await ethers.provider.getSigner(governor)
  const sDeployer = await ethers.provider.getSigner(deployer)
  const cLepakMembership = await ethers.getContractAt('LepakMembership', dLepakMembership.address)
  const cLepakCore = await ethers.getContractAt('LepakCore', dLepakCore.address)

  const tx1 = await cLepakMembership.connect(sDeployer).transferOwnership(cLepakCore.address)
  await tx1.wait()

  // const tx2 = await cLepakCore.connect(sGovernor).joinWithoutEth("emerson");
  // await tx2.wait();

  const isMember = await cLepakCore.isMember(governor)
  console.log('printing if ', governor, isMember)

  saveFrontendAddressFiles({
    LepakCore: cLepakCore.address,
    LepakMembership: cLepakMembership.address,
    LepakLifestyle: dLepakLifestyle.address,
  })
}
func.tags = ['Core']
export default func
