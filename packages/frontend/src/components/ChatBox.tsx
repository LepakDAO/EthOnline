import styled from "styled-components";
import { ChatTile } from "./ChatTile";
import { ChatInput } from "./ChatInput";

export const ChatBox = () => {
  return (
    <Wrapper>
      <ChatTileContainer>
        <ChatTile direction={{ send: true }} />
        <ChatTile direction={{ send: false }} />
      </ChatTileContainer>
      <ChatInputContainer>
        <ChatInput />
      </ChatInputContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 423px;
  height: 1098px;
  border-radius: 30px;
  border: 2px solid ${({ theme }) => theme.colors.strokeColor};
  background-color: ${({ theme }) => theme.colors.bgColor};
  margin-top: 50px;
`;

const ChatTileContainer = styled.div``;

const ChatInputContainer = styled.div`
  position: relative;
  top: 800px;
`;
