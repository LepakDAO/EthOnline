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

export type HHProps = {
  name: string
  duration: string
  pricesPerRoom: Array
}

export type MeetingProps = {
  name: string
  duration: string
  description: string
  playbackId: string
}

export const ContactSidebar = (admin: any) => {
  const [isStreamClicked, setIsStreamClicked] = useState(false)
  const [isHHClicked, setIsHHClicked] = useState(false)
  const [hackerHouses, setHackerHouses] = useState<HHProps[]>([])
  const [meetings, setMeetings] = useState<MeetingProps[]>([])

  useEffect(() => {
    setHackerHouses([
      {
        name: 'Kuala Lumpur HH 🌇',
        duration: 'Sept 28 2022 - Dec 28 2022',
        pricesPerRoom: [100, 200, 300],
      },
      {
        name: 'Bali HH 🏝',
        duration: 'Oct 28 2022 - Feb 28 2023',
        pricesPerRoom: [100, 200, 300],
      },
    ])
  }, [])

  // useEffect(() => {
  //   setMeetings([
  //     {
  //       name: 'Board meeting',
  //       duration: 'Sept 28 2022 - Dec 28 2022',
  //       description: 'You have been invited to attend a meeting of Moderators.',
  //     },
  //     {
  //       name: 'Community meeting',
  //       duration: 'Sept 28 2022 - Dec 28 2022',
  //       description: 'You have been invited to attend a meeting for Community.',
  //     },
  //   ])
  // }, [])

  useEffect(() => {
    ;(async () => {
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

      data.map((streamOnline: any) => {
        setMeetings([
          {
            name: streamOnline.name,
            duration: `${new Date(Date.now() - streamOnline.createdAt).getMinutes()} min`,
            description: 'Lepak Dao Call',
            playbackId: streamOnline.playbackId,
          },
        ])
      })
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
