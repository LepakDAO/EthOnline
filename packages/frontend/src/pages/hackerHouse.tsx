import type { NextPage } from 'next'
import styled from 'styled-components'
import { CustomLayout } from '../components/common/CustomLayout'
import { Button } from '../components/common/Button'
import Image from 'next/image'
import { Proposal } from '../components/Proposal'
import { useState } from 'react'
import peopleIcon from '../../public/icons/people.png'
import calendarIcon from '../../public/icons/calendar.png'
import priceIcon from '../../public/icons/price.png'

const hackerHouse = {
  image: 'https://source.unsplash.com/user/c_v_r',
  name: 'KUALA LUMPUR HH 🌇',
  duration: 'Sept 28 2022 - Dec 28 2022',
}

const proposals = [
  {
    name: 'Jian Kim',
    role: 'Member',
    image: 'https://source.unsplash.com/user/c_v_r',
    desc: 'Open new long term hh in Kuala Lumpur lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
    date: '23 Sept',
  },
  {
    name: 'Jian Kim',
    role: 'Member',
    image: 'https://source.unsplash.com/user/c_v_r',
    desc: 'Open new long term hh in Kuala Lumpur lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
    date: '23 Sept',
  },
  {
    name: 'Jian Kim',
    role: 'Member',
    image: 'https://source.unsplash.com/user/c_v_r',
    desc: 'Open new long term hh in Kuala Lumpur lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
    date: '23 Sept',
  },
  {
    name: 'Jian Kim',
    role: 'Member',
    image: 'https://source.unsplash.com/user/c_v_r',
    desc: 'Open new long term hh in Kuala Lumpur lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
    date: '23 Sept',
  },
]

const HackerHouse: NextPage = () => {
  const [admin, setAdmin] = useState(false)
  return (
    <CustomLayout>
      <MainContainer>
        <Screen>
          <Image
            src="https://source.unsplash.com/user/c_v_r"
            alt="live"
            layout="fill"
            objectFit="cover"
          />
        </Screen>
        <FlexBox>
          <NameContainer>
            <HouseName>{hackerHouse.name}</HouseName>
            <Duration>{hackerHouse.duration}</Duration>
          </NameContainer>
          <Button>{admin ? 'Close' : 'Apply'}</Button>
        </FlexBox>
        <Divider />
        <Desc>
          Long term hh in Kuala Lumpur lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          lorem ipsum lorem ipsum lorem ipsum Long term hh in Kuala Lumpur lorem ipsum lorem ipsum
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum Long term hh in
          Kuala Lumpur lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum lorem ipsum{' '}
        </Desc>
        <div style={{ marginTop: '3vw', display: 'flex' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginRight: '4vw' }}>
            <div
              style={{
                width: '2vw',
                height: '2vw',
                position: 'relative',
                overflow: 'hidden',
                marginRight: '1vw',
              }}
            >
              <Image src={peopleIcon} alt="live" layout="fill" objectFit="contain" />
            </div>
            <p style={{ fontSize: '1vw' }}>10/15</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginRight: '4vw' }}>
            <div
              style={{
                width: '2vw',
                height: '2vw',
                position: 'relative',
                overflow: 'hidden',
                marginRight: '1vw',
              }}
            >
              <Image src={calendarIcon} alt="live" layout="fill" objectFit="contain" />
            </div>
            <p style={{ fontSize: '1vw' }}>10/15</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginRight: '4 vw' }}>
            <div
              style={{
                width: '2vw',
                height: '2vw',
                position: 'relative',
                overflow: 'hidden',
                marginRight: '1vw',
              }}
            >
              <Image src={priceIcon} alt="live" layout="fill" objectFit="contain" />
            </div>
            <p style={{ fontSize: '1vw' }}>10/15</p>
          </div>
        </div>
      </MainContainer>
    </CustomLayout>
  )
}

const MainContainer = styled.div`
  margin-right: 1vw;
  width: 60vw;
  height: 50vw;
  border-radius: 30px;
  padding: 30px;
  border: 2px solid #13131b;
  background-color: #13131b;
`

const Screen = styled.div`
  display: flex;
  object-fit: cover;
  border-radius: 30px;
  overflow: hidden;
  align-items: center;
  position: relative;
  width: 100%;
  height: 24vw;
`

const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1vw 0 2vw 0;
`

const NameContainer = styled.div``

const HouseName = styled.div`
  font-size: 1.5vw;
  font-weight: 600;
`

const Duration = styled.div`
  margin-top: 0.2vw;
  font-size: 1vw;
  color: ${({ theme }) => theme.colors.textColor};
`

const Divider = styled.div`
  border: 1px solid #171720;
  width: 100%;
`

const Desc = styled.div`
  margin-top: 1vw;
  font-size: 1vw;
  color: ${({ theme }) => theme.colors.textColor};
`

const ProposalContainer = styled.div`
  margin: 43px 0;
`

const StyledButton = styled(Button)`
  width: 169px;
  height: 40px;
  font-size: 15px;
  margin-left: 900px;
`

export default HackerHouse
