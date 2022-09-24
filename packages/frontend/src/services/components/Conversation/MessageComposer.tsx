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
    <form autoComplete="off" onSubmit={onSubmit}>
      <Input
        type="text"
        placeholder="Type something..."
        name="message"
        value={message}
        onChange={onMessageChange}
        required
        style={{ color: 'black' }}
      />
      <IconButton aria-label="Send" icon={<BiMailSend />} type="submit" />
    </form>
  )
}

export default MessageComposer
