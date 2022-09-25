import styled from 'styled-components'
import { BigNumber, utils } from 'ethers'
import { useEffect, useRef, useState } from 'react'
import { CustomModal } from './modal/index'
import { FormInput } from './common/FormInput'
import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { UploadBox } from './common/UploadBox'
import { RiArrowDownSLine } from 'react-icons/ri'
import { Button } from './common/Button'
import { VideoCameraFilled } from '@ant-design/icons'
import axios from 'axios'
import { Client } from '@livepeer/webrtmp-sdk'
import { useNavigate } from 'react-router-dom'
import { Router, useRouter } from 'next/router'
import toast from 'react-hot-toast'

export default function AddLiveStreamModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  const { address, isConnected, connector } = useAccount()
  const [value, setValue] = useState<any>()
  const [buttonMsg, setButtonMsg] = useState<any>('Create')
  const [name, setName] = useState<string>('')
  const [startTime, setStartTime] = useState<string>('')
  const [hosts, setHosts] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [streamKey, setStreamKey] = useState<string>('')
  const client = new Client()
  const router = useRouter()
  const [parsedValue, setParsedValue] = useState<any>()
  const onChangeValue = (e: any) => {
    if (e.target.value.toString() != '') setParsedValue(utils.parseEther(e.target.value.toString()))
  }

  const createStream = async () => {
    if (!isConnected) {
      toast.error('You are not connected, Please connect your wallet')
      return
    }
    const res = await axios.post(
      '/api/stream',
      {
        name: name ? `${name}&&${address}` : 'NoName&&NoAddress',
        profiles: [
          {
            name: '720p',
            bitrate: 2000000,
            fps: 30,
            width: 1280,
            height: 720,
          },
          {
            name: '480p',
            bitrate: 1000000,
            fps: 30,
            width: 854,
            height: 480,
          },
          {
            name: '360p',
            bitrate: 500000,
            fps: 30,
            width: 640,
            height: 360,
          },
        ],
      },
      {
        headers: {
          'content-type': 'application/json',
          authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
        },
      }
    )
    setStreamKey(res.data.streamKey)
    localStorage.setItem('streamKey', res.data.streamKey)
    localStorage.setItem('streamId', res.data.id)
    router.push('/streamDashboard')
  }

  return (
    <>
      <CustomModal title="Add new livestream" isOpen={isOpen} onClose={onClose}>
        <AmountFormInput
          style={{ width: '564px' }}
          placeholder="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value)
          }}
        />
        {/* <FormInputContainer>
          <AmountFormInput
            style={{ marginRight: '46px' }}
            placeholder="Start Time"
            value={startTime}
            onChange={onChangeValue}
          />
          <AmountFormInput placeholder="Hosts" value={hosts} onChange={onChangeValue} />
        </FormInputContainer>
        <AmountFormInput
          style={{ width: '564px', height: '135px' }}
          placeholder="Description"
          value={description}
          onChange={onChangeValue}
        />
        <video className="App-video" ref={videoEl} /> */}
        <Button onClick={createStream}>{buttonMsg}</Button>
      </CustomModal>
    </>
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
