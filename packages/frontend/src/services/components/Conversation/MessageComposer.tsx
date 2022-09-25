import React, { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { IconButton, Input } from '@chakra-ui/react'
import { BiMailSend } from 'react-icons/bi'

type MessageComposerProps = {
  onSend: (msg: string) => Promise<void>
}

const MessageComposer = ({ onSend }: MessageComposerProps): JSX.Element => {
  const [message, setMessage] = useState('')
  const router = useRouter()

  useEffect(() => setMessage(''), [router.query.recipientWalletAddr])

  const onMessageChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => setMessage(e.currentTarget.value),
    []
  )

  const onSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      if (!message) {
        return
      }
      setMessage('')
      await onSend(message)
    },
    [onSend, message]
  )
  return (
    <form autoComplete="off" onSubmit={onSubmit} style={{ display: 'flex' }}>
      <Input
        type="text"
        placeholder="Type something..."
        name="message"
        value={message}
        onChange={onMessageChange}
        required
        style={{
          color: 'white',
          width: '100%',
          borderRadius: '5px',
          backgroundColor: '#2E2D30',
          paddingTop: '0.5vw',
          paddingBottom: '0.5vw',
          paddingLeft: '1vw',
        }}
      />
      <IconButton
        style={{ marginLeft: '1vw' }}
        aria-label="Send"
        icon={
          <BiMailSend
            style={{
              width: '2vw',
              height: '2vw',
              color: '#6868B4',
            }}
          />
        }
        type="submit"
      />
    </form>
  )
}

export default MessageComposer
