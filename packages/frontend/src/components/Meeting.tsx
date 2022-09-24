import styled from 'styled-components'
import { HiMinus } from 'react-icons/hi'
import { useState } from 'react'
import { MeetingProps } from './ContactSidebar'
import Link from 'next/link'

export const Meeting = ({ meeting }: { meeting: MeetingProps }) => {
  const [isRemoveClicked, setIsRemoveClicked] = useState(false)
  return (
    <Wrapper>
      <Link href="/livestream">
        <a
          onClick={() => {
            localStorage.setItem('playbackId', meeting.playbackId)
            console.log(meeting.playbackId)
          }}
        >
          <MainContainer>
            <Status />
            <MeetingContainer>
              <h1>{meeting.name}</h1>
              <p>{meeting.duration}</p>
              <p>{meeting.description.slice(0, 31)}</p>
              <p>{meeting.description.slice(31)}</p>
              <p>{meeting.playbackId}</p>
            </MeetingContainer>

            <IconContainer onClick={() => setIsRemoveClicked(true)}>
              <HiMinus />
            </IconContainer>
          </MainContainer>
        </a>
      </Link>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-bottom: 23px;
`

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Status = styled.div`
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.themeColor};
`

const MeetingContainer = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 15px;
  }
  p {
    font-size: 10px;
    color: ${({ theme }) => theme.colors.textColor};
  }
`

const IconContainer = styled.div`
  width: 36px;
  height: 36px;
  background-color: rgba(63, 63, 167, 0.12);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    color: ${({ theme }) => theme.colors.themeColor};
    font-size: 17px;
  }
`
