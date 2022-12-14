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
  display: flex;
  flex-direction: column;
  align-items: center;
`

const TitleContainer = styled.div`
  display: flex;
  margin: 0vw 0 3vw 0;
`

const Title = styled.p`
  font-weight: 600;
  font-size: 2vw;
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
