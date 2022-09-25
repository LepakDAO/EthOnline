import styled from 'styled-components'
import { ChatTile } from './ChatTile'
import { ChatInput } from './ChatInput'
import { Children } from 'react'

export const ChatBox = ({ children }: any) => {
  return (
    <Wrapper>
      <ChatTileContainer>
        <h2
          style={{
            marginTop: '1vw',
            marginBottom: '2vw',
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: '1.5vw',
            width: '100%',
          }}
        >
          Chat
        </h2>
        {children}
      </ChatTileContainer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 20vw;
  height: 47vw;
  border-radius: 20px;
  border: 2px solid ${({ theme }) => theme.colors.strokeColor};
  background-color: ${({ theme }) => theme.colors.bgColor};
  margin-top: 0.5vw;
`

const ChatTileContainer = styled.div`
  height: 42vw;
  padding-left: 1vw;
  padding-right: 1vw;
`

const ChatInputContainer = styled.div`
  position: relative;
`
