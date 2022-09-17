import { HiPlus } from 'react-icons/hi'
import styled from 'styled-components'
import { useState } from 'react'

type sizeProp = {
  width: string
  height: string
}

export const InfoPanel = ({
  admin,
  children,
  title,
  size,
}: {
  admin?: boolean
  children?: any
  title: string
  size: sizeProp
}) => {
  const [isPlusClicked, setIsPlusClicked] = useState(false)
  return (
    <Wrapper style={size}>
      <TitleContainer>
        <Title>{title}</Title>
        {admin && (
          <IconContainer onClick={() => setIsPlusClicked(true)}>
            <HiPlus />
          </IconContainer>
        )}
      </TitleContainer>
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.bgColor};
  color: ${({ theme }) => theme.colors.white};
  font-size: 25px;
  border-radius: 30px;
  padding: 20px;
  margin-right: 45px;
`

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Title = styled.div`
  font-weight: 600;
  font-size: 25px;
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
  &:hover {
    cursor: pointer;
  }
`
