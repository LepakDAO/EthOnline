import styled from 'styled-components'

export const Button = styled.button`
  color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  text-align: center;
  font-size: 25px;
  padding: 10px;
  width: 316px;
  height: 72px;
  background: rgb(70, 112, 216);
  background: linear-gradient(90deg, rgba(70, 112, 216, 1) 20%, rgba(166, 18, 255, 1) 80%);
  &:hover {
    cursor: pointer;
  }
`
