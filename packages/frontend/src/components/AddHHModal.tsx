import styled from 'styled-components'
import { BigNumber, utils } from 'ethers'
import { useState } from 'react'
import { CustomModal } from './modal/index'
import { FormInput } from './common/FormInput'
import { useAccount, useConnect, useDisconnect, useSigner } from 'wagmi'
import { UploadBox } from './common/UploadBox'
import { Button } from './common/Button'
import { NFTStorage } from 'nft.storage'
import { LepakLifestyle as LepakLifestyleType } from 'src/types/typechain'
import LepakLifestyle from '@artifacts/contracts/LepakLifestyle.sol/LepakLifestyle.json'
import { env } from '@shared/environment'
import { useContracts } from '@shared/useContracts'
import { ethers } from 'ethers'
import toast from 'react-hot-toast'

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

export default function AddHHModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { address, isConnected, connector } = useAccount()
  const [value, setValue] = useState<any>()
  const [buttonMsg, setButtonMsg] = useState<any>('Add Stay')
  const [name, setName] = useState<string>('')
  const [image, SetImage] = useState<File>()
  const [slots, setSlots] = useState<string>('')
  const [duration, setDuration] = useState<string>('')
  const [city, setCity] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const { contracts } = useContracts()
  const { data: signer } = useSigner()
  const onDonateSubmit = async () => {
    if (!name || !duration || !slots || !description || !city) if (!signer || !contracts) return

    setButtonMsg('Storing in IPFS')
    const cid = await storeDataToIpfs(image, name, description, { slots, duration, city })
    setButtonMsg('Submitting tx')
    const contract = new ethers.Contract(
      contracts.LepakLifestyle,
      LepakLifestyle.abi,
      signer!
    ) as LepakLifestyleType
    let receipt
    try {
      const tsx = await contract.addStay(
        cid,
        slots.split(' ').map((item) => {
          return parseInt(item)
        }),
        { gasLimit: 1000000 }
      )
      receipt = await tsx.wait()
      console.log(receipt)
      toast.success('Succesfully added stay')
    } catch (e) {
      console.error(e)
      setButtonMsg('Add Stay')
      return
    }
    setButtonMsg('Done !')
    onClose()
  }
  const onFileChanged = async (e: any) => {
    const { status } = e.file

    if (status === 'done') {
      SetImage(e.file.originFileObj || e.file)
    }
  }

  return (
    <CustomModal title="Add new hh" isOpen={isOpen} onClose={onClose}>
      <FormInputContainer>
        <AmountFormInput
          style={{ marginRight: '1vw' }}
          placeholder="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value)
          }}
        />
        <AmountFormInput
          placeholder="Slots"
          value={slots}
          onChange={(e) => {
            setSlots(e.target.value)
          }}
        />
      </FormInputContainer>
      <FormInputContainer>
        <AmountFormInput
          style={{ marginRight: '1vw' }}
          placeholder="Duration"
          value={duration}
          onChange={(e) => {
            setDuration(e.target.value)
          }}
        />
        <AmountFormInput
          placeholder="City"
          value={city}
          onChange={(e) => {
            setCity(e.target.value)
          }}
        />
      </FormInputContainer>
      <TextArea
        style={{ width: '30vw', height: '7vw' }}
        placeholder="Brief description of the hacker house "
        value={description}
        onChange={(e) => {
          setDescription(e.target.value)
        }}
      />
      <UploadBox title="Drop Images" onFileChanged={onFileChanged} />
      <Button onClick={onDonateSubmit}>{buttonMsg}</Button>
    </CustomModal>
  )
}

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
