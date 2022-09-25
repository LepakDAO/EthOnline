import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { HiPlus } from 'react-icons/hi'
import AddLiveStreamModal from './AddLiveStreamModal'
import AddHHModal from './AddHHModal'
import ConnectWallet from './common/ConnectWallet'
import { PrimaryButton } from './common/PrimaryButton'
import { HackerHouse } from './HackerHouse'
import { Meeting } from './Meeting'
import axios from 'axios'
import { useContracts } from '@shared/useContracts'
import { LepakLifestyle as LepakLifestyleType } from 'src/types/typechain'
import LepakLifestyle from '@artifacts/contracts/LepakLifestyle.sol/LepakLifestyle.json'
import { useAccount, useSigner, useProvider } from 'wagmi'
import { ethers } from 'ethers'
import toast from 'react-hot-toast'

export type MeetingProps = {
  name: string
  duration: string
  description: string
  playbackId: string
  startTime: string
}

export const ContactSidebar = (admin: any) => {
  const [isStreamClicked, setIsStreamClicked] = useState(false)
  const [isHHClicked, setIsHHClicked] = useState(false)
  const [hackerHouses, setHackerHouses] = useState<any[]>([])
  const [meetings, setMeetings] = useState<MeetingProps[]>([])
  const [staysRead, setStaysRead] = useState<any>([])
  const { contracts } = useContracts()
  const { data: signer } = useSigner()
  const { address } = useAccount()

  useEffect(() => {
    console.log(signer, address)
    const fn = async () => {
      if (!signer || !address) return
      console.log(address, signer)
      const contract = new ethers.Contract(
        contracts.LepakLifestyle,
        LepakLifestyle.abi,
        signer
      ) as LepakLifestyleType
      try {
        const listOfStays = await contract.getStays()
        const mlistOfStays = listOfStays.map((item, id) => {
          return {
            ...item,
            onApply: async () => {
              const tsx = await contract.applyForStay(id + 1)
              const receipt = await tsx.wait()
              toast.success('You have succesfully applied for the stay')
            },
          }
        })
        console.log('hola', mlistOfStays)
        setHackerHouses(mlistOfStays)
      } catch (e) {
        console.log(e)
      }
    }
    fn()
  }, [signer, address])

  useEffect(() => {
    ;(async () => {
      try {
        const res = await fetch(
          `https://livepeer.studio/api/stream?streamsonly=1&filters=[{"id": "isActive", "value": true}]`,
          {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
              'Content-Type': 'application/json',
            },
          }
        )

        const data = await res.json()
        console.log('debugging data', data)

        setMeetings(
          data.map((streamOnline: any) => {
            return {
              name: streamOnline.name,
              duration: `${new Date(Date.now() - streamOnline.createdAt).getMinutes()}`,
              description: 'Lepak Dao Call',
              playbackId: streamOnline.playbackId,
              startTime: streamOnline.createdAt,
            }
          })
        )
      } catch (e) {
        console.log(e)
      }
    })()
  }, [])

  return (
    <Wrapper>
      <ConnectWallet />
      <MainContainer>
        <HeightWrapper>
          <TitleContainer>
            <Title>Hacker Houses</Title>
            {admin && (
              <IconContainer onClick={() => setIsHHClicked(true)}>
                <HiPlus />
              </IconContainer>
            )}
          </TitleContainer>
          {hackerHouses.map((hackerHouse, id) => {
            return <HackerHouse key={id} hackerHouse={hackerHouse} />
          })}
        </HeightWrapper>
        <HeightWrapper>
          <TitleContainer>
            <Title>Active Livestream</Title>
            {admin && (
              <IconContainer onClick={() => setIsStreamClicked(true)}>
                <HiPlus />
              </IconContainer>
            )}
          </TitleContainer>
          {meetings.map((meeting, id) => {
            return <Meeting key={id} meeting={meeting} />
          })}
        </HeightWrapper>
        <AddLiveStreamModal isOpen={isStreamClicked} onClose={() => setIsStreamClicked(false)} />
        <AddHHModal isOpen={isHHClicked} onClose={() => setIsHHClicked(false)} />
        <StyledButton>Log out</StyledButton>
      </MainContainer>
    </Wrapper>
  )
}

const Wrapper = styled.div``

const MainContainer = styled.div`
  padding: 1.5vw 1vw;
  border: 2px solid #13131b;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 2vw;
  width: 18vw;
  height: 46vw;
  border: 2px solid ${({ theme }) => theme.colors.strokeColor};
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.bgColor};
`

const HeightWrapper = styled.div`
  height: 40%;
`

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.2vw;
`

const Title = styled.div`
  font-weight: 600;
  font-size: 1vw;
`

const IconContainer = styled.div`
  width: 1.5vw;
  height: 1.5vw;
  background-color: rgba(63, 63, 167, 0.12);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    color: ${({ theme }) => theme.colors.themeColor};
    font-size: 1.2vw;
  }
  &:hover {
    cursor: pointer;
  }
`

const StyledButton = styled(PrimaryButton)`
  width: 8vw;
  height: 2vw;
  font-size: 0.8vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`
