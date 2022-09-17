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
        <Image src={proposal.image} width="54px" height="54px" />
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
  font-size: 15px;
  padding: 20px 40px 20px 20px;
`

const ProfilePictureWrapper = styled.div`
  display: flex;
  object-fit: cover;
  border-radius: 50%;
  overflow: hidden;
  align-items: center;
  margin-right: 35px;
`

const Role = styled.div``

const Desc = styled.div``

const Date = styled.div``

const StyledButton = styled(PrimaryButton)`
  width: 122px;
  height: 37px;
  font-size: 15px;
  line-height: 0px;
`

const IconContainer = styled.div`
  svg {
    color: ${({ theme }) => theme.colors.themeColor};
    font-size: 37px;
  }
`

const CheckBox = styled.div`
  width: 37px;
  height: 37px;
  border-radius: 50%;
  border: 3px solid ${({ theme }) => theme.colors.themeColor};
`
