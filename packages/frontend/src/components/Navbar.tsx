import { ConnectButton } from '@rainbow-me/rainbowkit'
import logo from '../../public/images/logo-text.png'
import Image from 'next/image'
import 'twin.macro'
import tw from 'twin.macro'

const Navbar = () => {
  return (
    <div tw="w-full py-6 px-4 flex justify-end z-50">
      <div tw="absolute top-6 left-4 overflow-hidden w-52 h-12">
        <Image alt="lepak-logo" layout="fill" objectFit="contain" src={logo}></Image>
      </div>
      <ConnectButton />
    </div>
  )
}

export default Navbar
