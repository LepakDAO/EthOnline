import XmtpProvider from '../XmtpProvider'
import React, { useEffect, useRef, useState } from 'react'
import RecipientControl from './RecipientControl'
import useXmtp from 'src/services/hooks/useXmtp'
import { useSigner } from 'wagmi'
import Conversation from './Conversation'
import { VStack } from '@chakra-ui/react'
import { ChatBox } from '@components/ChatBox'

const ConversationLayout: React.FC = () => {
  const [peerAddressOrName, setPeerAddressOrName] = useState<string>(
    '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266'
  )

  const { connect: connectXmtp, disconnect: disconnectXmtp, walletAddress, client } = useXmtp()

  const { data: signer } = useSigner()

  const usePrevious = <T,>(value: T): T | undefined => {
    const ref = useRef<T>()
    useEffect(() => {
      ref.current = value
    })
    return ref.current
  }
  const prevSigner = usePrevious(signer)

  useEffect(() => {
    if ((!signer && prevSigner) || signer !== prevSigner) {
      disconnectXmtp()
    }
    if (!signer || signer === prevSigner) return
    const connect = async () => {
      const prevAddress = await prevSigner?.getAddress()
      const address = await signer.getAddress()
      if (address === prevAddress) return
      connectXmtp(signer)
    }
    connect()
  }, [signer, prevSigner, connectXmtp, disconnectXmtp])

  return (
    <>
      {walletAddress && client ? (
        <ChatBox>
          <VStack style={{ display: 'block' }}>
            <RecipientControl
              peerAddressOrName={peerAddressOrName}
              onSubmit={setPeerAddressOrName}
            />
          </VStack>
          <div style={{ height: '80%', display: 'flex', flexWrap: 'wrap', alignItems: 'end' }}>
            <Conversation peerAddressOrName={peerAddressOrName} />
          </div>
        </ChatBox>
      ) : (
        <ChatBox>
          <div style={{ textAlign: 'center', width: '100%' }}>
            Please sign the message to use XMTP Chatting Service.
          </div>
        </ChatBox>
      )}
    </>
  )
}

const Chat = () => {
  return (
    <XmtpProvider>
      <ConversationLayout />
    </XmtpProvider>
  )
}

export default Chat
