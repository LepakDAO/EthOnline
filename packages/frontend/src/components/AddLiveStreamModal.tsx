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
  const [streamKey, setStreamKey] = useState<string>('')
  const videoEl = useRef(null)
  const stream = useRef(null)
  const session = useRef(null)
  const client = new Client()
  const router = useRouter()
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

  const createStream = async () => {
    const res = await axios.post(
      '/api/stream',
      {
        name: 'test',
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
          authorization: `Bearer cb508de3-73aa-4765-be38-a2ac25ac6b49`,
        },
      }
    )

    console.log(res.data)
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
          onChange={onChangeValue}
        />
        <FormInputContainer>
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
        <video className="App-video" ref={videoEl} />
        <Button onClick={createStream}>{buttonMsg}</Button>
      </CustomModal>
    </>
  )
}

const FormInputContainer = styled.div`
  display: flex;
`

const AmountFormInput = styled(FormInput)`
  margin-bottom: 44px;
`
