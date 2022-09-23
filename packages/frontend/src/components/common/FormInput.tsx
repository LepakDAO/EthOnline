import styled from 'styled-components'

export const FormInput = styled.input`
  background-color: #232227;
  width: 10vw;
  contenteditable: true;
  height: 2vw;
  border-radius: 15px;
  appearance: none;
  outline: none;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${({ theme }) => theme.colors.textInputColor};
    font-size: 1vw;
    padding-left: 0vw;
  }
`
