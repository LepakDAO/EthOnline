import React, { useState } from 'react'
import styled from 'styled-components'
import Profile from './common/Profile'
import { BsTwitter, BsGithub } from 'react-icons/bs'
import { FaTelegramPlane } from 'react-icons/fa'
import { GrMail } from 'react-icons/gr'
import { Button } from './common/Button'
import Link from 'next/link'

const user = {
  name: 'Jian Kim',
  role: 'Member',
  image: 'https://source.unsplash.com/user/c_v_r',
  socialMedia: [
    { name: 'telegram', link: '', icon: <FaTelegramPlane /> },
    { name: 'twitter', link: '', icon: <BsTwitter /> },
    { name: 'github', link: '', icon: <BsGithub /> },
    { name: 'mail', link: '', icon: <GrMail /> },
  ],
}

export const ProfileSidebar = () => {
  return (
    <Wrapper>
      <LogoContainer>
        <Link href="/">
          <Logo>
            <strong>LEPAK</strong>
          </Logo>
        </Link>
      </LogoContainer>
      <Profile user={user} />
      <Badge>
        <svg
          width="166"
          height="166"
          viewBox="0 0 166 166"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M79.7535 0.129675C77.9393 0.47806 74.6071 1.66607 72.7735 2.61837C71.3739 3.34533 69.6835 4.78985 66.7674 7.75063C62.21 12.3783 60.4637 13.7875 57.3763 15.3297C52.3669 17.832 48.9941 18.4655 41.27 18.3557C34.7377 18.2626 33.3446 18.5239 29.4244 20.5766C25.5124 22.6247 22.5837 25.5536 20.5358 29.4661C18.4834 33.3866 18.222 34.7798 18.3152 41.3128C18.4249 49.0376 17.7915 52.4107 15.2894 57.4206C13.7474 60.5083 12.3384 62.2548 7.71112 66.8127C3.31112 71.1469 2.24853 72.7216 0.811303 77.0402C-0.270434 80.2909 -0.270434 85.8027 0.811303 89.0534C2.24853 93.3721 3.31112 94.9468 7.71112 99.281C12.3384 103.839 13.7474 105.585 15.2894 108.673C17.7915 113.683 18.4249 117.056 18.3152 124.781C18.222 131.314 18.4834 132.707 20.5358 136.628C22.5837 140.54 25.5124 143.469 29.4244 145.517C33.3446 147.57 34.7377 147.831 41.27 147.738C48.9941 147.628 52.3669 148.262 57.3763 150.764C60.4637 152.306 62.21 153.715 66.7674 158.343C71.1012 162.743 72.6758 163.806 76.994 165.243C78.8461 165.86 79.957 166 83 166C86.043 166 87.1539 165.86 89.0061 165.243C93.3242 163.806 94.8988 162.743 99.2326 158.343C103.79 153.715 105.536 152.306 108.624 150.764C113.633 148.262 117.006 147.628 124.73 147.738C131.262 147.831 132.655 147.57 136.576 145.517C140.488 143.469 143.416 140.54 145.464 136.628C147.517 132.707 147.778 131.314 147.685 124.781C147.575 117.056 148.208 113.683 150.711 108.673C152.253 105.585 153.662 103.839 158.289 99.281C162.689 94.9468 163.751 93.3721 165.189 89.0534C166.27 85.8027 166.27 80.2909 165.189 77.0402C163.751 72.7216 162.689 71.1469 158.289 66.8127C153.662 62.2548 152.253 60.5083 150.711 57.4206C148.208 52.4107 147.575 49.0376 147.685 41.3128C147.778 34.7798 147.517 33.3866 145.464 29.4661C143.416 25.5536 140.488 22.6247 136.576 20.5766C132.655 18.5239 131.262 18.2626 124.73 18.3557C117.092 18.4642 113.623 17.8255 108.81 15.4242C105.513 13.7793 104.098 12.6546 99.5572 8.06622C94.9202 3.38137 93.3574 2.30408 89.1684 0.906966C87.0922 0.214418 81.6514 -0.234619 79.7535 0.129675Z"
            fill="#A5EEC2"
          />
        </svg>
      </Badge>
      <Info>
        <p>Contributions:</p>
        <h1>0.01Ξ</h1>
      </Info>
      <Info>
        <p>Part of Lepak since:</p>
        <h1>24.09.2022</h1>
      </Info>
      <Button>Invite a friend</Button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 0;
  width: 386px;
  height: 1208px;
  margin: 0 55px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.bgColor};
  border: 2px solid ${({ theme }) => theme.colors.strokeColor};
`

const LogoContainer = styled.div`
  &:hover {
    cursor: pointer;
  }
  margin: 36px 0 76px 0;
`

const Logo = styled.h1`
  font-size: 40px;
  font-weight: 600;
`

const Badge = styled.div`
  margin: 158px 0 122px 0;
`

const Info = styled.div`
  color: ${({ theme }) => theme.colors.textColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 45px;
  p {
    font-size: 15px;
  }
  h1 {
    font-size: 25px;
  }
`
