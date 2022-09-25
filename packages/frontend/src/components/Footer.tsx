import logo from '../../public/images/logo-text.png'
import Image from 'next/image'
import 'twin.macro'
import tw from 'twin.macro'
import Link from 'next/link'
import dashboardImage from '../../public/images/dashboard.png'
import twitterImage from '../../public/icons/social/twitter.png'
import githubImage from '../../public/icons/social/github.png'

const Footer = () => {
  return (
    <div tw="mt-28 w-full py-12 px-8 grid grid-cols-6 z-50 text-white bg-[#151419]">
      <div style={{ width: '12vw', height: '4vw' }} tw="relative left-4 overflow-hidden col-span-1">
        <Image alt="lepak-logo" layout="fill" objectFit="contain" src={logo}></Image>
      </div>
      <div tw="flex justify-center items-center col-span-3">
        <a tw="mr-20">Privacy Policy</a>
        <a tw="mr-20">Contact us</a>
        <Link href="/join">
          <button tw="py-2 px-10 bg-gradient-to-r from-[#3D6DE3] to-[#BD00FF] rounded-xl font-bold hover:scale-105 duration-300 transition">
            Get started!
          </button>
        </Link>
      </div>
      <div tw="relative flex justify-end items-center pr-8 left-4 overflow-hidden col-span-2">
        <a
          href="https://twitter.com/LepakDAO"
          tw="w-8 h-8 overflow-hidden hover:scale-105 duration-300 transition cursor-pointer relative mr-10 shadow-[0px_0px_200px_rgba(72,0,130,1)]"
        >
          <Image alt="lepak-logo" layout="fill" objectFit="contain" src={twitterImage}></Image>
        </a>
        <a
          href="https://github.com/LepakDAO"
          tw="w-8 h-8 cursor-pointer hover:scale-105 duration-300 transition overflow-hidden relative shadow-[0px_0px_200px_rgba(72,0,130,1)]"
        >
          <Image alt="lepak-logo" layout="fill" objectFit="contain" src={githubImage}></Image>
        </a>
      </div>
    </div>
  )
}

export default Footer
