import styled from 'styled-components'
import { ChatTile } from './ChatTile'
import { ChatInput } from './ChatInput'

export const ChatBox = () => {
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
          }}
        >
          Chat
        </h2>
        <ChatTile direction={{ send: true }} />
        <ChatTile direction={{ send: false }} />
      </ChatTileContainer>
      <ChatInputContainer>
        <ChatInput />
      </ChatInputContainer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 20vw;
  height: 47vw;
  border-radius: 20px;
  border: 2px solid ${({ theme }) => theme.colors.strokeColor};
  background-color: ${({ theme }) => theme.colors.bgColor};
  margin-top: 1vw;
`

const ChatTileContainer = styled.div`
  height: 42vw;
`

const ChatInputContainer = styled.div`
  position: relative;
`
