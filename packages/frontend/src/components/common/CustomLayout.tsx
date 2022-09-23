import type { NextPage } from 'next'
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { ProfileSidebar } from '../ProfileSidebar'
import { ContactSidebar } from '../ContactSidebar'
import Image from 'next/image'
import background from '../../../public/images/background-bubbles.png'

export const CustomLayout = ({ children }: { children: any }) => {
  const [admin, setAdmin] = useState(true)
  return (
    <Wrapper>
      <div>
        <Image alt="bg" layout="fill" objectFit="cover" src={background}></Image>
      </div>
      <div style={{ position: 'absolute', display: 'flex' }}>
        <ProfileSidebar />
        {children}
        <ContactSidebar admin={admin} />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  font-family: 'Montserrat';
  background-color: ${({ theme }) => theme.colors.black};
  height: 100vh;
  max-width: 100vw;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  padding-top: 2vw;
`
