import { NextPage } from "next";
import styled from "styled-components";
import { Layout } from "../components/common/Layout";
import { ChatBox } from "../components/ChatBox";
import ConnectWallet from "../components/common/ConnectWallet";
import Image from "next/image";

const LiveStream: NextPage = () => {
  return (
    <Layout>
      <Wrapper>
        <MainContainer>
          <Screen>
            <Image
              src="https://source.unsplash.com/user/c_v_r"
              width="1424px"
              height="763px"
            />
          </Screen>
          <TitleContainer>
            <Title>Community Meeting</Title>
            <IconContainer>
              <svg
                width="54"
                height="54"
                viewBox="0 0 54 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M26.0687 0.128193C25.476 0.306623 14.2681 11.4673 13.9269 12.2188C13.1306 13.9723 14.4233 16.0574 16.33 16.095C17.5212 16.1186 17.6062 16.0562 21.0325 12.6449L24.2056 9.48556V24.9697C24.2056 36.7862 24.2391 40.5674 24.3472 40.9335C24.5362 41.5737 25.5008 42.5391 26.1404 42.7283C27.2521 43.057 28.2587 42.7806 29.0146 41.939C29.2915 41.6308 29.5803 41.1705 29.6565 40.9162C29.7604 40.569 29.7949 36.5948 29.7949 24.9697V9.48556L32.968 12.6449C36.3943 16.0562 36.4793 16.1186 37.6705 16.095C39.5886 16.0572 40.8722 13.9719 40.066 12.2036C39.8947 11.8279 38.3422 10.2056 34.1448 6.01614C29.3939 1.27441 28.3717 0.308721 27.9462 0.159777C27.3709 -0.0414957 26.6709 -0.0532667 26.0687 0.128193ZM1.84821 24.3752C1.23979 24.5671 0.294027 25.5678 0.119477 26.2041C0.00862178 26.6083 -0.0166467 29.4536 0.00943693 38.6161L0.0433223 50.5037L0.41187 51.2822C0.924691 52.3657 1.58482 53.0405 2.64469 53.5647L3.52455 54H27.0002H50.4759L51.3558 53.5647C52.4157 53.0405 53.0758 52.3657 53.5886 51.2822L53.9572 50.5037L53.991 38.6161C54.0163 29.7192 53.9901 26.6025 53.8868 26.2271C53.6918 25.5186 52.8728 24.6416 52.1884 24.4082C51.0597 24.0232 50.1488 24.2388 49.2954 25.093C48.9262 25.4627 48.6568 25.8572 48.5676 26.1594C48.4609 26.521 48.426 29.3244 48.426 37.5516V48.4641H27.0002H5.57444V37.5516C5.57444 29.4583 5.53869 26.5196 5.43599 26.1766C5.23314 25.4989 4.40615 24.6329 3.74742 24.4082C3.13202 24.1983 2.44674 24.1864 1.84821 24.3752Z"
                  fill="white"
                />
              </svg>
            </IconContainer>
          </TitleContainer>
          <Date>28 Sept 2022</Date>
          <Desc>
            Long term hh in Kuala Lumpur lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum Long
            term hh in Kuala Lumpur lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum Long term hh
            in Kuala Lumpur lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum{" "}
          </Desc>
        </MainContainer>
        <ChatBoxContainer>
          <ConnectWallet />
          <ChatBox />
        </ChatBoxContainer>
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

const MainContainer = styled.div`
  width: 1506px;
  height: 1208px;
  border: 2px solid #13131b;
  border-radius: 30px;
  margin: 0 58px 0 88px;
  padding: 40px;
`;

const Screen = styled.div`
  display: flex;
  object-fit: cover;
  border-radius: 30px;
  overflow: hidden;
  align-items: center;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 37px;
`;

const Title = styled.div`
  font-size: 40px;
  font-weight: 600;
`;

const IconContainer = styled.div`
  margin-right: 25px;
`;

const Date = styled.div`
  font-size: 25px;
  color: ${({ theme }) => theme.colors.textColor};
  margin-bottom: 40px;
`;

const Desc = styled.div`
  font-size: 25px;
  color: ${({ theme }) => theme.colors.textColor};
`;

const ChatBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export default LiveStream;
