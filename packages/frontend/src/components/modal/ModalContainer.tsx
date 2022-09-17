import styled from 'styled-components'
import { AiOutlineClose } from 'react-icons/ai'
import { PropsWithChildren } from 'react'

export default function ModalContainer({
  title = '',
  onCloseClick,
  children,
}: PropsWithChildren<{
  title: string
  onCloseClick?: (...args: any[]) => void
}>) {
  return (
    <Wrapper>
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
      <ContentContainer>{children}</ContentContainer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const TitleContainer = styled.div`
  display: flex;
  margin: 25px 0 65px 0;
`

const Title = styled.p`
  font-weight: 600;
  font-size: 40px;
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
