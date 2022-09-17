import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import { extractLinearGradientParamsFromTransform } from "@figma-plugin/helpers";
import Header from "../components/Header";
import JoinModal from "../components/JoinModal";

const Join: NextPage = () => {
  return (
    <Wrapper>
      <Header />
      <MainContainer>
        <JoinModal isOpen onClose={() => {}} id="1" />
      </MainContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-family: "Montserrat";
  height: 100vh;
  max-width: 100vw;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
`;
const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Join;
