import styled from 'styled-components'
import { BigNumber, utils } from 'ethers'
import { useEffect, useState } from 'react'
import { CustomModal } from './modal/index'
import { FormInput } from './common/FormInput'
import { useAccount, useConnect, useDisconnect, useFeeData } from 'wagmi'
import { env } from '@shared/environment'
import { ethers } from 'ethers'
import { defaultAbiCoder as abi } from '@ethersproject/abi'
import { useRouter } from 'next/router'
import { UploadBox } from './common/UploadBox'
import ModalContainer from './modal/ModalContainer'
import { Button } from './common/Button'
import { NFTStorage } from 'nft.storage'
import toast from 'react-hot-toast'
import { useContracts } from '@shared/useContracts'
import { useSigner } from 'wagmi'
import { LepakCore as LepakCoreType } from 'src/types/typechain'
import dynamic from 'next/dynamic'
import LepakCore from '@artifacts/contracts/LepakCore.sol/LepakCore.json'
import { WidgetProps } from '@worldcoin/id'
import { solidityKeccak256, solidityPack } from 'ethers/lib/utils'
import { keccak256 } from '@ethersproject/solidity'
import { useNotification } from '@web3uikit/core'
import { Notification, sendTargetedNotif } from './EPNS'

const WorldIDWidget = dynamic<WidgetProps>(
  () => import('@worldcoin/id').then((mod) => mod.WorldIDWidget),
  { ssr: false }
)

async function storeDataToIpfs(
  image: any,
  inputName: string,
  inputDescription: string,
  otherDetails: any
) {
  const ipfs = new NFTStorage({
    token: env.NFTStorageAPIKEY,
  })
  const nftMetadata = await ipfs.store({
    image,
    name: inputName ? inputName : 'No Name',
    description: inputDescription ? inputDescription : 'No Description',
    ...otherDetails,
  })
  console.log(`https://ipfs.io/ipfs/${nftMetadata.ipnft}/metadata.json`)
  return nftMetadata.ipnft
}

export default function JoinModal({
  isOpen,
  onClose,
  id,
}: {
  isOpen: boolean
  onClose: () => void
  id: any
}) {
  const { address, isConnected, connector } = useAccount()
  const [value, setValue] = useState<any>()
  const [buttonMsg, setButtonMsg] = useState<any>('Join')
  const [email, SetEmail] = useState<string>('')
  const [name, SetName] = useState<string>('')
  const [twitter, SetTwitter] = useState<string>('')
  const [telegram, SetTelegram] = useState<string>('')
  const [description, SetDescription] = useState<string>('')
  const [image, SetImage] = useState<File>()
  const [goToDashBoard, setGoToDashboard] = useState<boolean>(false)
  const [worldIDProof, setWorldIDProof] = useState<any>(null)
  const [alreadyJoined, setAlreadyJoined] = useState<boolean>(false)
  const router = useRouter()
  const { data: signer } = useSigner()
  const { contracts } = useContracts()
  const dispatch = useNotification()

  useEffect(() => {
    const fn = async () => {
      if (!signer || !address) return
      const contract = new ethers.Contract(
        contracts.LepakCore,
        LepakCore.abi,
        signer!
      ) as LepakCoreType
      const isMember = await contract.isMember(address)
      if (isMember == true) router.push(`/dashboard/`)
    }
    fn()
  }, [signer])

  const onJoin = async () => {
    // checker to see if values are not empty
    if (
      !name ||
      !email ||
      !twitter ||
      !telegram ||
      !description
      // || !image
    ) {
      toast.error('Please enter all values in the form!')
      return
    }
    if (!worldIDProof) return

    if (!signer || !contracts) return

    if (goToDashBoard) {
      router.push(`/dashboard/`)
      return
    }
    setButtonMsg('Loading...')
    //TODO : UNCOMMENT
    // let cid = await storeDataToIpfs(image,name,description,{email,twitter,telegram});
    toast.success('Metadata stored successfully')
    setButtonMsg('Performing Trasaction')
    //Contract interaction
    console.log('debugging contracts', contracts.LepakCore, LepakCore.abi, signer)
    const contract = new ethers.Contract(
      contracts.LepakCore,
      LepakCore.abi,
      signer
    ) as LepakCoreType
    let receipt
    try {
      console.log(address, worldIDProof, abi.decode(['uint256[8]'], worldIDProof.proof))
      const tsx = await contract.joinWithoutEth(
        'testing',
        address,
        worldIDProof.merkle_root,
        worldIDProof.nullifier_hash,
        abi.decode(['uint256[8]'], worldIDProof.proof)[0],
        { gasLimit: 1000000 }
      )
      receipt = await tsx.wait()
      console.log(receipt)
    } catch (e) {
      console.error(e)
      setButtonMsg('Join')
      return
    }

    try {
      // check if transaction is sucessful
      if (receipt.status === 1) {
        toast.success('Transaction Successful')
        setButtonMsg('Notifying LepakDao...')

        //// [EPNS Section]
        // create EPNS notification
        const broadcastNotification: Notification = {
          recipientAddr: address,
          title: 'New Lepak Member',
          // body: `${name}[${address}] has applied for LepakDao!`,
          body: `${name} has applied for LepakDao!`,
          cta: `https://lepakdao.xyz/u/${address}`,
          // using LepakDao logo for now
          imgLink: 'https://avatars.githubusercontent.com/u/113761179?s=200&v=4',
        }

        // Debug
        console.log(broadcastNotification)
        // broadcast notification to LepakDao channel
        const resp = await sendTargetedNotif(broadcastNotification, 1)
        console.log(resp.status)
        // if successful, show a popup
        if (resp.status === 204) {
          dispatch({
            type: 'success',
            message: 'LepakDao Members will contact you soon!',
            title: 'EPNS Message Broadcast',
            position: 'topR',
          })
        } else {
          dispatch({
            type: 'warning',
            message: `EPNS message sending failed!`,
            title: 'EPNS Message Broadcast',
            position: 'topR',
          })
        }
        toast.success('Registered Successfully')
      }
    } catch (error) {
      console.log(error)
    }

    setGoToDashboard(true)
    setButtonMsg('Go to Dashboard')
  }
  const onFileChanged = async (e: any) => {
    const { status } = e.file

    if (status === 'done') {
      SetImage(e.file.originFileObj || e.file)
    }
  }

  const widgetProps: WidgetProps = {
    actionId: 'wid_staging_85f9d1b6ab3027c3d5026fbb30a41998',
    enableTelemetry: true,
    appName: 'LepakDAO',
    signalDescription: 'Jom Lepak',
    theme: 'dark',
    signalParams: [address],
    signal: address,
    debug: true, // Recommended **only** for development
    onSuccess: (result: any) => setWorldIDProof(result),
    onError: ({ code, detail }: any) => console.log({ code, detail }),
    onInitSuccess: () => console.log('Init successful'),
    onInitError: (error: any) => console.log('Error while initialization World ID', error),
  }

  return (
    <Wrapper>
      <ModalContainer title="Join Lepak DAO">
        <FormInputContainer>
          <AmountFormInput
            style={{ marginRight: '1vw' }}
            placeholder="Email"
            value={email}
            onChange={(e) => {
              SetEmail(e.target.value)
            }}
          />
          <AmountFormInput
            placeholder="Name"
            value={name}
            onChange={(e) => {
              SetName(e.target.value)
            }}
          />
        </FormInputContainer>
        <FormInputContainer>
          <AmountFormInput
            style={{ marginRight: '1vw' }}
            placeholder="Twitter"
            value={twitter}
            onChange={(e) => {
              SetTwitter(e.target.value)
            }}
          />
          <AmountFormInput
            placeholder="Telegram"
            value={telegram}
            onChange={(e) => {
              SetTelegram(e.target.value)
            }}
          />
        </FormInputContainer>
        <TextArea
          style={{ width: '30vw', height: '7vw' }}
          placeholder="Why do you want to join Lepak DAO?"
          value={description}
          onChange={(e) => {
            SetDescription(e.target.value)
          }}
        />
        <UploadBox title="Drop profile pic" onFileChanged={onFileChanged} />
        <Button onClick={onJoin}>{buttonMsg}</Button>
        {address && <WorldIDWidget {...widgetProps} />}
      </ModalContainer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.bgColor};
  border-radius: 25px;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  width: 35vw;
  height: 48vw;
  margin-top: 1vw;
`

const FormInputContainer = styled.div`
  display: flex;
  width: 30vw;
`

const AmountFormInput = styled(FormInput)`
  margin-bottom: 2vw;
  height: 3.5vw;
  width: 14.5vw;
  outline: none;
  padding-left: 1vw;
  padding-right: 1vw;
  font-size: 1vw;
`

const TextArea = styled.textarea`
  background-color: #232227;
  border-radius: 15px;
  padding: 1vw;
  outline: none;
  margin-bottom: 2vw;
  font-size: 1vw;
  ::placeholder {
    color: ${({ theme }) => theme.colors.textInputColor};
    font-size: 1vw;
  }
`
