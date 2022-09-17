import styled from 'styled-components'

const colors = {
  black: '#000000',
  white: '#ffffff',
  green: '#249651',
  lightGreen: '#A5EEC2',
  themeColor: '#6868B4',
  bgColor: '#151419',
  textColor: '#595665',
  textInputColor: '#403F44',
  inputBg: '#232227',
  strokeColor: '#13131B',
}

const common = {
  flexCenter: `
    display: flex;
    justify-contents: center;
    align-items: center;
  `,
  flexCenterColumn: `
    display: flex;
    flex-direction: column;
    justify-contents: center;
    align-items: center;
  `,
}

const theme = {
  colors,
  common,
}

export default theme
