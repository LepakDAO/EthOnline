import styled from 'styled-components'

export const FormInput = styled.input`
  background-color: #232227;
  width: 259px;
  height: 60px;
  border-radius: 15px;
  appearance: none;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${({ theme }) => theme.colors.textInputColor};
    font-size: 20px;
    padding-left: 20px;
  }
`
