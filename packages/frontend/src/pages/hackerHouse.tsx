import type { NextPage } from "next";
import styled from "styled-components";
import { CustomLayout } from "../components/common/CustomLayout";
import { Button } from "../components/common/Button";
import Image from "next/image";
import { Proposal } from "../components/Proposal";
import { useState } from "react";

const hackerHouse = {
  image: "https://source.unsplash.com/user/c_v_r",
  name: "KUALA LUMPUR HH 🌇",
  duration: "Sept 28 2022 - Dec 28 2022",
};

const proposals = [
  {
    name: "Jian Kim",
    role: "Member",
    image: "https://source.unsplash.com/user/c_v_r",
    desc: "Open new long term hh in Kuala Lumpur lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    date: "23 Sept",
  },
  {
    name: "Jian Kim",
    role: "Member",
    image: "https://source.unsplash.com/user/c_v_r",
    desc: "Open new long term hh in Kuala Lumpur lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    date: "23 Sept",
  },
  {
    name: "Jian Kim",
    role: "Member",
    image: "https://source.unsplash.com/user/c_v_r",
    desc: "Open new long term hh in Kuala Lumpur lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    date: "23 Sept",
  },
  {
    name: "Jian Kim",
    role: "Member",
    image: "https://source.unsplash.com/user/c_v_r",
    desc: "Open new long term hh in Kuala Lumpur lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    date: "23 Sept",
  },
];

const HackerHouse: NextPage = () => {
  const [admin, setAdmin] = useState(true);
  return (
    <CustomLayout>
      <MainContainer>
        <PictureWrapper>
          <Image src={hackerHouse.image} width="1083px" height="453px" />
        </PictureWrapper>
        <FlexBox>
          <NameContainer>
            <HouseName>{hackerHouse.name}</HouseName>
            <Duration>{hackerHouse.duration}</Duration>
          </NameContainer>
          <Button>Close</Button>
        </FlexBox>
        <Divider />
        <ProposalContainer>
          <StyledButton>Add</StyledButton>
          {proposals.map((proposal) => {
            return (
              <Proposal
                action={{
                  action: "add",
                }}
                proposal={proposal}
              />
            );
          })}
        </ProposalContainer>
      </MainContainer>
    </CustomLayout>
  );
};

const MainContainer = styled.div`
  margin-right: 60px;
  width: 1151px;
  height: 1208px;
  border-radius: 30px;
  padding: 30px;
  border: 2px solid #13131b;
`;

const PictureWrapper = styled.div`
  display: flex;
  object-fit: cover;
  border-radius: 30px;
  overflow: hidden;
  align-items: center;
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 48px 0 68px 0;
`;

const NameContainer = styled.div``;

const HouseName = styled.div`
  font-size: 40px;
  font-weight: 600;
`;

const Duration = styled.div`
  font-size: 25px;
  color: ${({ theme }) => theme.colors.textColor};
`;

const Divider = styled.div`
  border: 1px solid #2b2b38;
  width: 1087px;
`;

const ProposalContainer = styled.div`
  margin: 43px 0;
`;

const StyledButton = styled(Button)`
  width: 169px;
  height: 40px;
  font-size: 15px;
  margin-left: 900px;
`;

export default HackerHouse;
