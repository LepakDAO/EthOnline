import styled, { css } from 'styled-components'
import Image from 'next/image'

type Direction = {
  send: boolean
  //if true -> send, if false -> receive
}
export const ChatTile = ({ direction }: { direction: Direction }) => {
  return (
    <>
      {direction.send ? (
        <Wrapper>
          <Picture>
            <Image src="https://source.unsplash.com/user/c_v_r" width="35px" height="35px" />
          </Picture>
          <MessageBox>
            <Name>Luck</Name>
            <Message>Long term hh in Kuala orem iem ipsum lorem ipsum </Message>
          </MessageBox>
        </Wrapper>
      ) : (
        <Wrapper style={{ justifyContent: 'flex-end' }}>
          <MessageBox
            style={{
              backgroundColor: '${({ theme }) => theme.colors.themeColor}',
            }}
          >
            <Message>Long term hh in Kuala orem iem ipsum lorem ipsum </Message>
          </MessageBox>
          <Picture>
            <Image src="https://source.unsplash.com/user/c_v_r" width="35px" height="35px" />
          </Picture>
        </Wrapper>
      )}
    </>
  )
}

const Wrapper = styled.div`
  display: flex;
  padding: 0.5vw;
`

const Picture = styled.div`
  display: flex;
  object-fit: cover;
  overflow: hidden;
  align-items: center;
  border-radius: 50%;
`

const MessageBox = styled.div`
  background-color: ${({ theme }) => theme.colors.inputBg};
  width: 14vw;
  border-radius: 10px;
  padding: 0.5vw;
  margin: 0 1vw;
`
const Name = styled.div`
  font-size: 1vw;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 0;
  padding: 0.2vw;
`

const Message = styled.div`
  font-size: 0.8vw;
  color: ${({ theme }) => theme.colors.white};
  padding: 0.4vw;
`
