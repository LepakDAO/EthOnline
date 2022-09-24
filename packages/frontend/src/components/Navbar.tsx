import ConnectWallet from './common/ConnectWallet'
import logo from '../../public/images/logo-text.png'
import Image from 'next/image'
import 'twin.macro'
import tw from 'twin.macro'

const Navbar = () => {
  return (
    <div tw="w-full py-6 px-4 flex justify-end z-50">
      <div style={{ width: '12vw', height: '4vw' }} tw="absolute left-4 top-3 overflow-hidden">
        <Image alt="lepak-logo" layout="fill" objectFit="contain" src={logo}></Image>
      </div>
      <div tw="absolute top-6 right-4 z-50">
        <ConnectWallet />
      </div>
    </div>
  )
}

export default Navbar
