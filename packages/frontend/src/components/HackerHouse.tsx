import styled from 'styled-components'

type HHProps = {
  name: string
  duration: string
}
export const HackerHouse = ({ hackerHouse }: { hackerHouse: HHProps }) => {
  return (
    <Wrapper>
      <MainContainer>
        <SVGContainer>
          <svg
            width="1vw"
            height="1vw"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.7216 0.0347337C15.4506 0.168205 16.2834 0.529274 16.8017 0.936421C17.1379 1.20052 25.9278 9.15131 26.5388 9.74397C27.2393 10.4234 27.6108 11.0365 27.8763 11.9512L28 12.3775V18.2056C28 23.714 27.9944 24.0547 27.8981 24.4167C27.4867 25.9627 26.3288 27.2384 24.8893 27.7317C24.6413 27.8167 24.2781 27.9119 24.0822 27.9432C23.8446 27.9813 20.4696 28.0002 13.9452 28C4.60378 27.9997 4.14208 27.9951 3.66773 27.8973C1.94066 27.5414 0.59304 26.1944 0.12389 24.3553L0 23.8695V18.0961V12.3227L0.151342 11.8408C0.432549 10.9454 0.766083 10.416 1.48729 9.72044C1.75419 9.46307 3.56301 7.81336 5.50685 6.05454C7.45069 4.29571 9.4726 2.4642 10 1.98455C10.5274 1.50489 11.0968 1.01079 11.2653 0.886567C11.6708 0.587719 12.2876 0.289255 12.7945 0.146589C13.2545 0.0171126 14.2955 -0.0433027 14.7216 0.0347337ZM13.2659 3.02502C13.1485 3.08226 10.8934 5.08685 8.25463 7.47966C4.48482 10.898 3.41951 11.8927 3.28246 12.1219C2.9091 12.7466 2.92789 12.3934 2.94416 18.4799L2.9589 23.9789L3.11145 24.2681C3.31501 24.6539 3.64225 24.9709 4.01929 25.1474L4.32877 25.2923H14.0559H23.7831L24.1459 25.1139C24.5682 24.9063 24.858 24.6096 25.0611 24.177L25.2055 23.8695L25.2205 18.4575C25.23 15.024 25.2155 12.9375 25.1808 12.7501C25.1507 12.5876 25.0844 12.3669 25.0335 12.2598C24.9734 12.1332 24.344 11.5233 23.2376 10.5192C16.373 4.29012 15.2081 3.24539 15.0137 3.14366C14.6182 2.93675 14.3742 2.88301 13.9178 2.90232C13.6307 2.91453 13.4058 2.95683 13.2659 3.02502Z"
              fill="#6868B4"
            />
          </svg>
        </SVGContainer>
        <HHContainer>
          <h1>{hackerHouse.name}</h1>
          <p>{hackerHouse.duration}</p>
        </HHContainer>
      </MainContainer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-bottom: 1.5vw;
`

const MainContainer = styled.div`
  display: flex;
`

const SVGContainer = styled.div`
  width: 1.5vw;
  height: 1.5vw;
  background-color: rgba(63, 63, 167, 0.12);
  border-radius: 10px;
  display: flex;
  margin-right: 0.5vw;
  align-items: center;
  justify-content: center;
  svg {
    color: ${({ theme }) => theme.colors.themeColor};
    font-size: 1vw;
  }
`

const HHContainer = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 0.9vw;
  }
  p {
    font-size: 0.7vw;
    margin-top: 0.2vw;
    color: ${({ theme }) => theme.colors.textColor};
  }
`
