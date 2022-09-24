# Lepak DAO - First fully-on-chain builders community in South East Asia
## **Intro to Lepak**

Lepak has a similar meaning to "hang out" in Malay, however its meaning goes beyond. We have witnessed increasing awareness of blockchain and many young builders rising up in our local communities, that's why we have decided to launch Lepak DAO, aiming to be the first fully on-chain builder family in South East Asia.

## **Lepak Main Features**
Apart from all the royalties that our Lepak NFT holders can get, Lepak DAO offers its members some special features which actually power this project.

- Long Term Hacker Houses ( LTHH )
- Decentralized Storage of Information
- Decentralized Video Streaming ( workshops )
- Notifications services 
- Proof Of Humanity and Uniqueness
- Privacy in voting rounds ( DAO )
- Extra Features ...

### **DAO Management**

Lepak DAO is meant to be governed by its members, and its voting mechanism is "one NFT holder , one vote" . The DAO has set a number ( max 5 ) of moderators which are whitelisted addresses that can execute certain actions that wouldn't require to go thru some proposal raising and voting by the whole DAO.

Some allowed decisions include :
  - Blacklisting people from the DAO
  - Withdrawing certain amount of funds
  - Opening Hacker Houses
  - reviewing and accepting applciations to join the cohorts

Some decisions that are not allowed :
  - Naming new moderators
  - blacklisting moderators
  - Giving free memberships to users

### **Long Term Hacker Houses**

We offer our users the option to apply to stay in our permanent coliving spaces in Kuala Lumpur ( coming soon !), They are required to apply and wait for an application decision that is made by the moderators. Some users will have to pay a subscription fee if they decide to use the co-living or co-working spaces.

### **Decentralized Storage of Information**
We are aware of the censorship problems that arises in the web2 world. We wanted to give our users the freedom and onwership of their data, making it available in a decentralized way using [IPFS]('https://ipfs.tech/'). Some data that is stored in IPFS include :
  - Users' Details ( name, contact info, profile pic)
  - Proposals of the DAO
  - LTHH Details ( costs , location, pictures)

### **Proof Of Humanity and Uniqueness**
We have integrated [Worldcoin](https://worldcoin.org/)'s PoH by using their widget and integrating directly with our smart contracts, for more details check [integration](packages/contracts/contracts/LepakCore.sol), with this feature we will definetely be more secure and more innovative. 
  - We will only allow real users to be part of the DAO
  - We will avoid users with different wallets joining the DAO several times and holding more voting power than the rest
  - We give security and safety to our members, since we are launching IRL cohorts, people should feel safe that its actual humans applying for the co-living

### **Notification Services**
One of the core features of Lepak is notification services using [EPNS](https://epns.io), we will allow our users stay updated on whats happening within our DAO :
  - New users Joining
  - Proposals executed
  - Applications results of LTHHs
  - and many more...

### **Privacy in Voting Rounds**
This is a unique feature of lepak, we use the power of ZK-Badges of [sismo](https://blog.sismo.io/what-is-sismo-part-1-zk-badges-73e7031bacda)
for a more detailed overview on how we use sismo please visit [Lepak Sismo Docs](packages/sismo/README.md)

### **Decentralized Livestreaming**
Since Lepak DAO is a project we want to launch soon, we thought that one important feature is the ability to livestream workshops and meetups and in a decentralized way. This is going to make it easier for our community to share **workshops** & **events** all in real time. We have used [livepeer](https://livepeer.org/)'s amazing API to achive this 

### **Extra Features**
  - Looking forward to partner with [Aut Protocol](https://docs.aut.id/v2/intro/what-is-aut) to extend our DAO capabilities, We have used their so-called d-aut ID in our project and it allows users who already have an ID to connect to our DAO expander.
  - Streaming of funds with [superfluid](https://www.superfluid.finance/) , to cover the costs of subscriptions to our cohorts or LTHH
  - We use 

## The Stack

- Package-Manager: `pnpm`
- Monorepo Tooling: `turborepo`
- Smart Contract Development: `hardhat`
  - Deploy & Address-Export: `hardhat-deploy`
  - Typescript-Types: `typechain`
- Frontend: `next`
  - Contract Interactions: `wagmi`, `rainbowkit`
  - Styling: `tailwindcss`
  - Styled Components: `twin.macro`, `emotion`
- Misc:
  - Linting & Formatting: `eslint`, `prettier`
  - Actions on Git Hooks: `husky`, `lint-staged`

## Getting Started

```bash
# Install pnpm ** if you dont have it
npm i -g pnpm

# Install dependencies
pnpm install

# Copy & fill environments
cp packages/frontend/.env.local.example packages/frontend/.env.local
cp packages/contracts/.env.example packages/contracts/.env
```

## Development

```bash
# on terminal 1 
cd packages/contracts
yarn deploy
# on terminal 2 Generate contract-types, start local hardhat node, and start frontend with turborepo
pnpm dev

# Only start frontend
pnpm frontend:dev
```
