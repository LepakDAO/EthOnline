import Navbar from '@components/Navbar'
import type { NextPage } from 'next'
import background from '../../public/images/landing-background.png'
import KualaLumpur from '../../public/images/KualaLumpur.png'
import liveImage from '../../public/images/live.png'
import dashboardImage from '../../public/images/dashboard.png'
import Image from 'next/image'
import 'twin.macro'
import tw from 'twin.macro'
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
import aave from '../../public/images/aave.svg'
import Link from 'next/link'
import Footer from '../components/Footer'
import ScalingElement from '@components/animation/ScaliingElement'

const sponsors = [
  livepeer,
  worldcoin,
  superfluid,
  polygon,
  ipfs,
  graph,
  skale,
  epns,
  sismo,
  tellor,
  aave,
]

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
    return <div tw="flex flex-wrap space-x-8 justify-center">{renderedSponsors}</div>
  }

  const renderCohorts = () => {
    const cohorts = [
      { name: 'Kuala Lumpur', image: KualaLumpur },
      { name: 'Kuala Lumpur', image: KualaLumpur },
      { name: 'Kuala Lumpur', image: KualaLumpur },
    ]

    const renderedCohorts = cohorts.map((cohort) => {
      return (
        <div key={cohort.name}>
          <ScalingElement>
            <div tw="w-96 h-64 bg-[#151419] rounded-xl mt-14 mr-6 ml-6 p-4">
              <div tw="w-full h-40 overflow-hidden relative rounded-xl">
                <Image alt="lepak-logo" layout="fill" objectFit="cover" src={cohort.image}></Image>
              </div>
              <div tw="grid grid-cols-2 h-24">
                <div tw="flex justify-start">
                  <p tw="text-xl mt-2 font-bold">Kuala Lumpur</p>
                </div>
                <div tw="flex items-center justify-end">
                  <button tw="w-40 h-10 bg-gradient-to-r from-[#3D6DE3] to-[#BD00FF] rounded-xl font-bold hover:scale-105 duration-300 transition">
                    Join now!
                  </button>
                </div>
              </div>
            </div>
          </ScalingElement>
        </div>
      )
    })

    return <div tw="w-full mt-10 flex flex-wrap justify-center">{renderedCohorts}</div>
  }

  return (
    <>
      <Navbar />
      <div style={{ zIndex: '-1' }} tw="w-full lg:h-screen overflow-hidden absolute top-0">
        <Image alt="lepak-logo" layout="fill" objectFit="cover" src={background}></Image>
      </div>
      <div tw="flex flex-wrap items-center justify-center h-screen w-full absolute top-0 max-h-screen">
        <ScalingElement>
          <h1 style={{ fontSize: '5vw', lineHeight: '6vw' }} tw="z-20 text-center font-black mt-24">
            <span tw="text-transparent bg-clip-text bg-gradient-to-r from-[#3D6DE3] to-[#BD00FF]">
              Connecting Builders
            </span>
            <br /> in South East Asia.
          </h1>
        </ScalingElement>
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
            <div tw="items-center mb-5 hidden lg:flex">{renderSponsors()}</div>
          </Wrapper>
        </div>
      </div>
      <div style={{ marginTop: '100vh' }}>
        <div tw="w-full flex flex-wrap justify-center pt-36">
          <h2 style={{ fontSize: '3vw' }} tw="text-center w-1/2 font-black">
            Join IRL{' '}
            <span tw="text-transparent bg-clip-text bg-gradient-to-r from-[#3D6DE3] to-[#BD00FF]">
              cohorts
            </span>
            <br />
            <span tw="text-transparent bg-clip-text bg-gradient-to-r from-[#3D6DE3] to-[#BD00FF]">
              and co-working spaces
            </span>
          </h2>
          {renderCohorts()}
        </div>
        <div tw="w-full flex justify-center pt-24">
          <div tw="grid grid-cols-2 w-10/12">
            <div tw="h-screen flex items-center justify-center">
              <div tw="w-full h-1/2 overflow-hidden relative rounded-xl shadow-[0px_0px_200px_rgba(72,0,130,1)]">
                <Image
                  alt="lepak-logo"
                  layout="fill"
                  objectFit="contain"
                  src={dashboardImage}
                ></Image>
              </div>
            </div>
            <div tw="h-screen flex items-center justify-end">
              <div tw="w-8/12">
                <ScalingElement>
                  <h2 style={{ fontSize: '3vw' }}>
                    <span tw="text-transparent bg-clip-text bg-gradient-to-r from-[#3D6DE3] to-[#BD00FF]">
                      Stay up to date
                    </span>{' '}
                    with member dashboard.
                  </h2>
                </ScalingElement>
              </div>
            </div>
          </div>
        </div>
        <div tw="w-full flex justify-center">
          <div tw="grid grid-cols-2 w-10/12">
            <div tw="h-screen flex items-center justify-start">
              <div tw="w-8/12">
                <ScalingElement>
                  <h2 style={{ fontSize: '3vw' }}>
                    <span tw="text-transparent bg-clip-text bg-gradient-to-r from-[#3D6DE3] to-[#BD00FF]">
                      Build your network
                    </span>{' '}
                    with community calls.
                  </h2>
                </ScalingElement>
              </div>
            </div>
            <div tw="h-screen flex items-center justify-center">
              <div tw="w-full h-1/2 overflow-hidden relative rounded-xl shadow-[0px_0px_200px_rgba(72,0,130,1)]">
                <Image alt="lepak-logo" layout="fill" objectFit="contain" src={liveImage}></Image>
              </div>
            </div>
          </div>
        </div>
        <div tw="text-center py-36">
          <h2 style={{ fontSize: '3vw' }}>Ready to dive in?</h2>
          <ScalingElement>
            <h2 style={{ fontSize: '5vw' }} tw="font-black">
              <span tw="text-transparent bg-clip-text bg-gradient-to-r from-[#3D6DE3] to-[#BD00FF]">
                Join us today
              </span>
            </h2>

            <div tw="w-full flex justify-center mt-20">
              <Link href="/join">
                <button tw="py-6 px-36 bg-gradient-to-r from-[#3D6DE3] to-[#BD00FF] rounded-xl font-bold hover:scale-105 duration-300 transition">
                  Join now!
                </button>
              </Link>
            </div>
          </ScalingElement>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default HomePage
