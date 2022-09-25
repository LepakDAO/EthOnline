# Lepak DAO - First fully on-chain builders community in South East Asia⛩

## **Intro to Lepak💡**

Lepak has a similar meaning to "hang out" in Malay, however its meaning goes beyond. We have witnessed increasing awareness of blockchain and many young builders rising up in our local communities. That's why we have decided to launch Lepak DAO, aiming to be the first fully on-chain builder family in South East Asia!

## **Main Features⚙️**
Apart from all the royalties that our NFT holders get, Lepak DAO offers a dashboard packed with features and IRL opportunities for networking and self improvement.

- Long Term Hacker Houses ( LTHH )
- Decentralized Storage of Information
- Decentralized Video Streaming ( workshops )
- Notification services 
- Proof Of Humanity and Uniqueness
- Privacy in voting rounds ( DAO )
- Extra Features✨ ...

### **DAO Management⚖️**

Lepak DAO is meant to be governed by its members, and its voting mechanism is "one NFT holder, one vote". The DAO sets a number ( max 5 ) of moderators that can execute certain actions that wouldn't require voting by the entire DAO. It is a perfect equilibrium achieved by leaving important decisions up to the DAO, while still maintaining ability to decide quickly on repetitive actions.

Some allowed decisions include :
  - Blacklisting people from the DAO
  - Withdrawing certain amount of funds
  - Opening Hacker Houses
  - Reviewing and accepting applcations to join the cohorts

Some decisions that are not allowed :
  - Naming new moderators
  - blacklisting moderators
  - Giving free memberships to users
  
![alt text](http://drive.google.com/uc?export=view&id=1KJpwCzDviXlZtTCFpTbsmalpL_gWiA9w)

### **Long Term Hacker Houses🏠**

Every member can apply for a stay in our permanent co-living spaces in Kuala Lumpur ( coming soon !). After submission all applicants have to wait for a final decision that is made by the moderators. Some accommodation and co-working options might require an additional subscription fee.

![alt text](http://drive.google.com/uc?export=view&id=1p_Jwm4xSATi_kluUcHFqWFXKVk7MI8jY)

### **Decentralized Storage of Information🌐**
We are aware of the censorship problems that arises in the web2 world. We want to give our users the freedom and onwership of their data, making it available in a decentralized way using [IPFS]('https://ipfs.tech/'). Data stored in IPFS include :
  - Users' Details ( name, contact info, profile pic)
  - Proposals of the DAO
  - LTHH Details ( costs , location, pictures)

### **Proof Of Humanity and Uniqueness💎**
We have integrated [Worldcoin](https://worldcoin.org/)'s PoH by using their widget and integrating our smart contracts. For more details check [integration](packages/contracts/contracts/LepakCore.sol). With this feature our DAO will definetely be more secure and more innovative. 
  - We will only allow real users to be part of the DAO
  - We will avoid users with different wallets joining the DAO several times and holding more voting power than the rest
  - We give security and safety to our members, since we are launching IRL cohorts, people should feel safe that its actual humans applying for the co-living


### **Notification Services🛎**
One of the core features of Lepak is notification service made possible by [EPNS](https://epns.io). We allow our users to stay updated on what is happening within our DAO :
  - New users Joining
  - Proposals executed
  - Applications results for LTHHs
  - and many more...

### **Privacy in Voting Rounds🔒**
This is a unique feature of Lepak. We use the power of ZK-Badges provided by [sismo](https://blog.sismo.io/what-is-sismo-part-1-zk-badges-73e7031bacda).
For a more detailed overview on how we use sismo please visit [Lepak Sismo Docs](packages/sismo/README.md)

### **Decentralized Livestreaming && Chat💭**
Since Lepak DAO is a real project that is launching very soon, we are working on solutions to keep our community engaged. One of them is the ability to livestream workshops and meetups in a decentralized manner. This is going to make it easier for our community to share **workshops** & **events** all in real time. We have used [livepeer](https://livepeer.org/)'s amazing API to achive this. To keep viewers attention we allow them to send messages during a these live events. However, that's not everything. In Lepak DAO users can also send some [streams](https://www.superfluid.finance/) of money to the streamers!🤑

### **Extra Features🦄**
  - Looking forward to partner with [Aut Protocol](https://docs.aut.id/v2/intro/what-is-aut) to extend our DAO capabilities, we have used their so-called d-aut ID in our project, which allows users who already have an ID to connect to our DAO expander.
  - Streaming of funds with [superfluid](https://www.superfluid.finance/), to cover the costs of subscriptions for our cohorts or LTHH
  - We use [tellor](https://tellor.io/) for **Dynamic Token URI** and allow users to purchase their memberships using different ERC20 Tokens

## The Stack🛠

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

## Getting Started🏃🏽‍♂️

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
