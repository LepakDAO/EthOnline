import styled from 'styled-components'
import Image from 'next/image'

type SocialMediaProps = {
  name: string
  link: string
  icon: any
}

export type UserProps = {
  image: string
  name: string
  role: string
  socialMedia: SocialMediaProps[]
}

export default function Profile({ user }: { user: UserProps }) {
  return (
    <Wrapper>
      <MainContainer>
        <ProfilePictureWrapper>
          <Image src={user.image} width="75px" height="75px" />
        </ProfilePictureWrapper>
        <NameContainer>
          <Name>{user.name}</Name>
          <Role>{user.role}</Role>
        </NameContainer>
      </MainContainer>
      <Divider />
      <SocialMediaContainer>
        {user.socialMedia.map((item) => (
          <SocialMediaItem
            key={item.name}
            onClick={() => {
              window.open(item.link)
            }}
          >
            {item.icon}
          </SocialMediaItem>
        ))}
      </SocialMediaContainer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding-left: 10px;
`

const Divider = styled.div`
  border: 1px solid #2b2b38;
  width: 316px;
  margin: 51px auto 93px auto;
`

const ProfilePictureWrapper = styled.div`
  display: flex;
  object-fit: cover;
  border-radius: 50%;
  overflow: hidden;
  align-items: center;
  background: #f2f2f2;
  margin-right: 35px;
`

const ProfilePicture = styled.img`
  width: 100%;
`
const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Name = styled.div`
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 10px;
`

const Role = styled.div`
  color: ${({ theme }) => theme.colors.textColor};
  font-size: 15px;
`

const SocialMediaContainer = styled.div`
  display: flex;
  margin-left: 1rem;
`

const SocialMediaItem = styled.div`
  color: ${({ theme }) => theme.colors.themeColor};
  font-size: 37px;
  margin-right: 37px;
  &:hover {
    cursor: pointer;
  }
`
