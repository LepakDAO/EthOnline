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
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.bgColor};
  width: 204px;
  height: 196px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 55px;
  padding: 15px;
`

const Image = styled.div``

const Title = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-size: 30px;
  margin: 10px 0 6px 2px;
`

const Description = styled.div`
  color: ${({ theme }) => theme.colors.textColor};
  font-size: 15px;
`
