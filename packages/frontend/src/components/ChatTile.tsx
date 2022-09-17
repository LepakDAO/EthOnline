import styled, { css } from "styled-components";
import Image from "next/image";

type Direction = {
  send: boolean;
  //if true -> send, if false -> receive
};
export const ChatTile = ({ direction }: { direction: Direction }) => {
  return (
    <>
      {direction.send ? (
        <Wrapper>
          <Picture>
            <Image
              src="https://source.unsplash.com/user/c_v_r"
              width="35px"
              height="35px"
            />
          </Picture>
          <MessageBox>
            <Name>Luck</Name>
            <Message>Long term hh in Kuala orem iem ipsum lorem ipsum </Message>
          </MessageBox>
        </Wrapper>
      ) : (
        <Wrapper style={{ justifyContent: "flex-end" }}>
          <MessageBox
            style={{
              backgroundColor: "${({ theme }) => theme.colors.themeColor}",
            }}
          >
            <Message>Long term hh in Kuala orem iem ipsum lorem ipsum </Message>
          </MessageBox>
          <Picture>
            <Image
              src="https://source.unsplash.com/user/c_v_r"
              width="35px"
              height="35px"
            />
          </Picture>
        </Wrapper>
      )}
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  padding: 10px;
`;

const Picture = styled.div`
  display: flex;
  object-fit: cover;
  overflow: hidden;
  align-items: center;
  border-radius: 50%;
`;

const MessageBox = styled.div`
  background-color: ${({ theme }) => theme.colors.inputBg};
  width: 258px;
  border-radius: 10px;
  padding: 5px;
  margin: 0 15px;
`;
const Name = styled.div`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 10px;
  padding: 5px;
`;

const Message = styled.div`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.white};
  padding: 5px;
`;
