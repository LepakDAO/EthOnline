import styled from 'styled-components'
import { HiMinus } from 'react-icons/hi'
import { useState } from 'react'
import { MeetingProps } from './ContactSidebar'

export const Meeting = ({ meeting }: { meeting: MeetingProps }) => {
  const [isRemoveClicked, setIsRemoveClicked] = useState(false)
  return (
    <Wrapper>
      <MainContainer>
        <Status />
        <MeetingContainer>
          <h1>{meeting.name}</h1>
          <p>{meeting.duration}</p>
          <p>{meeting.description.slice(0, 31)}</p>
          <p>{meeting.description.slice(31)}</p>
        </MeetingContainer>
        <IconContainer onClick={() => setIsRemoveClicked(true)}>
          <HiMinus />
        </IconContainer>
      </MainContainer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-bottom: 1vw;
`

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Status = styled.div`
  width: 0.5vw;
  height: 0.5vw;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.themeColor};
`

const MeetingContainer = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 0.9vw;
  }
  p {
    font-size: 0.7vw;
    margin-top: 0.2vw;
    color: ${({ theme }) => theme.colors.textColor};
  }
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
`
