import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import { extractLinearGradientParamsFromTransform } from '@figma-plugin/helpers'
import background from '../../public/images/background-bubbles.png'
import Navbar from '@components/Navbar'
import JoinModal from '../components/JoinModal'
import { NotificationProvider } from '@web3uikit/core'
const Join: NextPage = () => {
  return (
    <Wrapper>
      <div style={{ zIndex: '-1' }} tw="w-full h-screen overflow-hidden absolute top-0">
        <Image alt="bg" layout="fill" objectFit="cover" src={background}></Image>
      </div>
      <Navbar />
      <MainContainer>
        <NotificationProvider>
          <JoinModal isOpen onClose={() => {}} id="1" />
        </NotificationProvider>
      </MainContainer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  font-family: 'Montserrat';
  height: 100vh;
  max-width: 100vw;

  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
`
const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
`

export default Join
