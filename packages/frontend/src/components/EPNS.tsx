// import * as EpnsAPI from '@epnsproject/sdk-restapi'
// import { chainId } from 'wagmi'
// import { env } from '../shared/environment'
// import { ethers } from 'ethers'

// // create a type for notifications
// export interface Notification {
//   recipientAddr?: string
//   title: string
//   body: string
//   cta: string
//   imgLink: string
// }

// export interface SubscriptionChannel {
//   channel: string
// }

// // constants for functions
// const epnsPKey1 = `0x${env.EPNS_API_PKEY_1}`
// const polygonChainId = chainId.polygonMumbai
// const channelSigner = new ethers.Wallet(epnsPKey1)
// const epnsChannel1 = env.EPNS_CHANNEL_1 // account #1

// export const sendTargetedNotif = async (notif: Notification, payloadType: number) => {
//   const date = new Date()
//   const utcDateTime = date.toISOString().split('T').join(':')
//   // console.log(date.toISOString().split('T').join(':'))
//   // apiResponse?.status === 204, if sent successfully!
//   const apiResponse = await EpnsAPI.payloads.sendNotification({
//     signer: channelSigner,
//     type: payloadType, //1 - for broadcast, 3 - for direct message, 4 - for subset.
//     identityType: 2, // direct payload
//     notification: {
//       title: `[${utcDateTime}]\n` + notif.title,
//       body: notif.body,
//     },
//     payload: {
//       title: `[${utcDateTime}]\n` + notif.title,
//       body: notif.body,
//       cta: notif.cta,
//       img: notif.imgLink,
//     },
//     recipients: 'eip155:' + polygonChainId + ':' + notif.recipientAddr, // recipient address
//     channel: 'eip155:' + polygonChainId + ':' + epnsChannel1, // your channel address
//     env: 'staging',
//   })
//   // console.log(`caip: ${'eip155:' + polygonChainId + ':' + epnsChannel1}`)
//   // console.log(`API Response: ${apiResponse}`)
//   return apiResponse
// }
