import styled from 'styled-components'
import Image from 'next/image'
import { PrimaryButton } from './common/PrimaryButton'
import { useState } from 'react'
import { BsFillCheckCircleFill } from 'react-icons/bs'

export type ProposalProps = {
  name: string
  role: string
  image: string
  desc: string
  date: string
}

type ProposalAction = {
  action: 'approve' | 'add'
}

export const Proposal = ({
  proposal,
  action,
}: {
  proposal: ProposalProps
  action: ProposalAction
}) => {
  const [isChecked, setIsChecked] = useState(true)

  return (
    <Wrapper>
      <ProfilePictureWrapper>
        <Image src={proposal.image} width="45px" height="45px" />
      </ProfilePictureWrapper>
      <Role>{proposal.role}</Role>
      <Desc>
        <p>{proposal.desc.slice(0, 60)}</p>
        <p>{proposal.desc.slice(61, 120)}</p>
      </Desc>
      <Date>{proposal.date}</Date>
      {action == 'approve' ? (
        <StyledButton>Approve</StyledButton>
      ) : (
        <IconContainer>{isChecked ? <BsFillCheckCircleFill /> : <CheckBox />}</IconContainer>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.textColor};
  font-size: 0.8vw;
  padding: 1.5vw 2vw 1.5vw 1.5vw;
`

const ProfilePictureWrapper = styled.div`
  display: flex;
  object-fit: cover;
  border-radius: 50%;
  overflow: hidden;
  align-items: center;
  margin-right: 1vw;
`

const Role = styled.div``

const Desc = styled.div``

const Date = styled.div``

const StyledButton = styled(PrimaryButton)`
  width: 10vw;
  height: 2vw;
  font-size: 1vw;
  line-height: 0px;
`

const IconContainer = styled.div`
  svg {
    color: ${({ theme }) => theme.colors.themeColor};
    font-size: 1.2vw;
  }
`

const CheckBox = styled.div`
  width: 1.2vw;
  height: 1.2vw;
  border-radius: 50%;
  border: 3px solid ${({ theme }) => theme.colors.themeColor};
`
