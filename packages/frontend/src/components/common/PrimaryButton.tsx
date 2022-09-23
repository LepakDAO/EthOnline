import styled from 'styled-components'

export const PrimaryButton = styled.button`
  font-weight: 400;
  font-size: 1vw;
  color: ${({ theme }) => theme.colors.themeColor};
  border-radius: 10px;
  border: 3px solid ${({ theme }) => theme.colors.themeColor};
  text-align: center;
  padding: 0.8rem;
  width: 316px;
  height: 72px;
  &:hover {
    cursor: pointer;
  }
`
