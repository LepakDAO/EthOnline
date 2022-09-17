import styled from "styled-components";
import Link from "next/link";
import ConnectWallet from "./common/ConnectWallet";
export default function Header({ account }: any) {
  return (
    <Wrapper>
      <LogoContainer>
        <Link href="/">
          <Logo>
            <strong>LEPAK</strong>
          </Logo>
        </Link>
      </LogoContainer>
      <ConnectWallet />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: calc(100%);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
`;

const LogoContainer = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

const Logo = styled.a`
  font-size: 40px;
  font-weight: 600;
`;
