import styled from 'styled-components'

export const InfoTile = ({
  image,
  title,
  description,
}: {
  image: any
  title: string
  description: any
}) => {
  return (
    <Wrapper>
      <Image>{image}</Image>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.bgColor};
  width: 9vw;
  height: 8vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-right: 2vw;
  padding: 15px;
`

const Image = styled.div``

const Title = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.2vw;
  margin: 0.3vw 0 0.1vw 0.05vw;
`

const Description = styled.div`
  color: ${({ theme }) => theme.colors.textColor};
  font-size: 0.7vw;
`
