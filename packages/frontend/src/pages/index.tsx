import Navbar from '@components/Navbar'
import type { NextPage } from 'next'
import background from '../../public/images/landing-background.png'
import Image from 'next/image'
import 'twin.macro'
import tw from 'twin.macro'
import { useSigner } from 'wagmi'
import { Wrapper } from '@components/layout/Wrapper'
import livepeer from '../../public/images/livepeer.svg'
import worldcoin from '../../public/images/worldcoin.svg'
import superfluid from '../../public/images/superfluid.svg'
import polygon from '../../public/images/polygon.svg'
import ipfs from '../../public/images/ipfs.svg'
import graph from '../../public/images/graph.svg'
import skale from '../../public/images/skale.svg'
import epns from '../../public/images/epns.svg'
import sismo from '../../public/images/sismo.svg'
import tellor from '../../public/images/tellor.svg'
import Link from 'next/link'

const sponsors = [livepeer, worldcoin, superfluid, polygon, ipfs, graph, skale, epns, sismo, tellor]

const HomePage: NextPage = () => {
  const renderSponsors = () => {
    const renderedSponsors = sponsors.map((sponsor) => {
      return (
        <a
          href="#"
          target="_blank"
          tw="cursor-pointer grayscale opacity-80 hover:(opacity-100 grayscale-0)"
          key={sponsor}
        >
          <Image src={sponsor} width={120} height={75} alt="sponsor-icon" />
        </a>
      )
    })
    return <div tw="flex flex-wrap space-x-10 justify-center">{renderedSponsors}</div>
  }
  return (
    <>
      <Navbar />
      <div style={{ zIndex: '-1' }} tw="w-full h-screen overflow-hidden absolute top-0">
        <Image alt="lepak-logo" layout="fill" objectFit="cover" src={background}></Image>
      </div>
      <div tw="flex flex-wrap items-center justify-center h-screen w-full absolute top-0">
        <h1 style={{ fontSize: '5vw', lineHeight: '6vw' }} tw="z-20 text-center font-black mt-24">
          <span tw="text-transparent bg-clip-text bg-gradient-to-r from-[#3D6DE3] to-[#BD00FF]">
            Connecting Builders
          </span>
          <br /> in South East Asia.
        </h1>
        <div tw="w-full mt-10 flex justify-center">
          <p style={{ fontSize: '2.4vh' }} tw="text-center w-1/2 text-gray-500">
            Build lasting connection with DAO members, enjoy co-working and co-living spaces IRL,
            on-chain membership roles, governance and much more!
          </p>
        </div>
        <div tw="w-full flex justify-center mt-8">
          <Link href="/join">
            <button tw="py-4 px-36 bg-gradient-to-r from-[#3D6DE3] to-[#BD00FF] rounded-xl font-bold hover:scale-105 duration-300 transition">
              Join now!
            </button>
          </Link>
        </div>

        <div className="w-full mt-8">
          <Wrapper>
            <div tw="flex flex-col items-center mb-5">{renderSponsors()}</div>
          </Wrapper>
        </div>
      </div>
    </>
  )
}

export default HomePage
