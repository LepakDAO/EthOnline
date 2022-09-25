import { NextPage } from 'next'
import styled from 'styled-components'
import { Layout } from '../components/common/Layout'
import { ChatBox } from '../components/ChatBox'
import ConnectWallet from '../components/common/ConnectWallet'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Chat from 'src/services/components/Conversation/Chat'
import { useRouter } from 'next/router'
import { timeConverter } from './api/utils'

const LiveStream: NextPage = () => {
  const [playbackId, setPlayBackId] = useState<string | null>(null)
  const [name, setName] = useState<string | null>('')
  const [duration, setDuration] = useState<string | null>('0')
  const router = useRouter()
  const data = router.query

  // TODO : YKC
  // can get the creator thru data.creator

  return (
    <Layout>
      <Wrapper>
        <MainContainer>
          <Screen>
            <Frame
              src={`https://lvpr.tv?v=${data.id}`}
              frameBorder="0"
              allowFullScreen
              allow="autoplay; encrypted-media; picture-in-picture"
              sandbox="allow-scripts"
            ></Frame>
          </Screen>
          <TitleContainer>
            <Title>{data.name ? data.name : 'No Stream'}</Title>
            <IconContainer>
              <svg
                width="25"
                height="45"
                viewBox="0 0 508 978"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M213.568 2.46057C205.233 7.08024 204.289 13.5902 204.289 66.4938V115.599L193.301 118.035C103.075 138.042 32.3836 203.325 16.0666 281.713C11.9085 301.684 11.9009 339.723 16.0513 359.658C24.1955 398.777 37.4093 422.535 68.9103 454.697C97.4303 483.816 143.729 509.554 231.997 545.359C326.905 583.857 354.727 602.161 366.852 634.075C373.229 650.862 370.964 673.913 361.028 693.355C346.459 721.86 303.172 743.022 259.294 743.093C204.866 743.179 147.667 720.507 93.7594 677.481C84.9923 670.482 75.9634 664.761 73.6951 664.767C71.4269 664.773 67.2421 666.279 64.3948 668.112C60.1832 670.826 22.1356 718.949 4.1006 744.372C-4.74107 756.837 -0.17022 765.593 26.5363 787.346C71.0638 823.617 126.004 849.447 182.314 860.582L203.334 864.737L204.289 915.265C204.941 949.728 205.98 967.075 207.56 969.829C211.965 977.513 218.458 978.465 262.223 977.844C302.295 977.276 303.689 977.127 307.905 972.909C312.164 968.648 312.273 967.488 313.21 916.67L314.165 864.781L329.452 861.475C375.55 851.505 412.836 831.314 445.227 798.789C465.272 778.659 475.566 764.561 487.098 741.442C521.494 672.498 512.578 580.592 466.688 531.014C453.236 516.482 431.753 498.505 414.767 487.566C396.184 475.599 344.6 451.702 298.878 433.883C216.328 401.708 197.958 392.157 174.12 369.02C154.382 349.861 149.98 339.444 151.283 314.985C152.376 294.452 156.909 283.895 170.954 269.165C182.786 256.758 204.618 244.557 224.353 239.321C242.232 234.578 278.426 233.651 298.438 237.422C336.119 244.524 361.477 255.506 400.388 281.581C421.295 295.591 425.837 297.902 430.603 296.948C433.687 296.33 437.719 294.461 439.565 292.791C443.184 289.513 487.767 209.728 489.854 202.79C492.122 195.252 485.617 187.207 464.552 171.492C427.114 143.566 369.451 120.301 325.239 115.286L313.38 113.94L312.818 61.6065C312.262 10.0695 312.187 9.20754 307.905 4.92235C303.672 0.686857 302.428 0.56071 261.088 0.115371C226.723 -0.253514 217.658 0.193736 213.568 2.46057Z"
                  fill="white"
                />
              </svg>
            </IconContainer>
          </TitleContainer>
          <Date>Started {data.startTime && timeConverter(parseInt(data.startTime))}</Date>
          <Desc>Lepak Dao Call</Desc>
        </MainContainer>
        <ChatBoxContainer>
          {/* <ConnectWallet /> */}
          <Chat />
        </ChatBoxContainer>
      </Wrapper>
    </Layout>
  )
}
const Wrapper = styled.div`
  display: flex;
`
const MainContainer = styled.div`
  width: 75vw;
  height: 49vw;
  border: 2px solid #13131b;
  border-radius: 20px;
  margin: 1vw 2vw 0 2vw;
  padding: 1vw 2vw 2vw 2vw;
  overflow: hidden;
`

const Screen = styled.div`
  display: flex;
  object-fit: cover;
  border-radius: 30px;
  overflow: hidden;
  align-items: center;
`

const Frame = styled.iframe`
  width: 100%;
  height: 600px;
`

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 37px;
`

const Title = styled.div`
  font-size: 40px;
  font-weight: 600;
`

const IconContainer = styled.div`
  margin-right: 25px;
`

const Date = styled.div`
  font-size: 25px;
  color: ${({ theme }) => theme.colors.textColor};
  margin-bottom: 40px;
`

const Desc = styled.div`
  font-size: 25px;
  color: ${({ theme }) => theme.colors.textColor};
`

const ChatBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

export default LiveStream
