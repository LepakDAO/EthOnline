import type { NextPage } from 'next'
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { ProfileSidebar } from '../ProfileSidebar'
import { ContactSidebar } from '../ContactSidebar'

export const Layout = ({ children }: { children: any }) => {
  const [admin, setAdmin] = useState(true)
  return <Wrapper>{children}</Wrapper>
}

const Wrapper = styled.div`
  font-family: 'Montserrat';
  background-color: ${({ theme }) => theme.colors.black};
  height: 100vh;
  max-width: 100vw;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  padding-top: 50px;
`
