import styled from 'styled-components'
import { BigNumber, utils } from 'ethers'
import { useState } from 'react'
import { CustomModal } from './modal/index'
import { FormInput } from './common/FormInput'
import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { UploadBox } from './common/UploadBox'
import { RiArrowDownSLine } from 'react-icons/ri'
import { Button } from './common/Button'

export default function AddLiveStreamModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  const { address, isConnected, connector } = useAccount()
  const [value, setValue] = useState<any>()
  const [buttonMsg, setButtonMsg] = useState<any>('Join')
  const [name, setName] = useState<string>('')
  const [startTime, setStartTime] = useState<string>('')
  const [hosts, setHosts] = useState<string>('')
  const [description, setDescription] = useState<string>('')

  const [parsedValue, setParsedValue] = useState<any>()
  const onChangeValue = (e: any) => {
    if (e.target.value.toString() != '') setParsedValue(utils.parseEther(e.target.value.toString()))
  }
  const onDonateSubmit = async () => {
    setButtonMsg('Loading...')
    // const Account = await connector?.account();
    // const balance =
    //   await // const finalBalance = uint256ToBN(balance[0]).toString();

    //   // await
    setButtonMsg('Join')
  }
  return (
    <CustomModal title="Add new livestream" isOpen={isOpen} onClose={onClose}>
      <AmountFormInput
        style={{ width: '30vw' }}
        placeholder="Name"
        value={name}
        onChange={onChangeValue}
      />
      <FormInputContainer>
        <AmountFormInput
          style={{ marginRight: '1vw' }}
          placeholder="Start Time"
          value={startTime}
          onChange={onChangeValue}
        />
        <AmountFormInput placeholder="Hosts" value={hosts} onChange={onChangeValue} />
      </FormInputContainer>
      <TextArea
        style={{ width: '30vw', height: '7vw' }}
        placeholder="Why do you want to join Lepak DAO?"
        value={description}
        onChange={onChangeValue}
      />
      <UploadBox
        title="Drop thumbnail"
        onFileChanged={(e: any) => {
          console.log(e)
        }}
      />
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
