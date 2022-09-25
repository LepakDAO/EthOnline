import { useCallback, useState, useEffect } from 'react'
import useXmtp from '../../hooks/useXmtp'
import useEns from '../../hooks/useEns'
import { VStack, Text, Heading, Input } from '@chakra-ui/react'
import truncateEthAddress from 'truncate-eth-address'

type RecipientInputProps = {
  peerAddressOrName: string | undefined
  onSubmit: (address: string) => Promise<void>
}

const RecipientInputMode = {
  InvalidEntry: 0,
  ValidEntry: 1,
  FindingEntry: 2,
  Submitted: 3,
  NotOnNetwork: 4,
}

// peerAddressOrName: connected peer
const RecipientControl = ({ peerAddressOrName, onSubmit }: RecipientInputProps): JSX.Element => {
  const { client } = useXmtp()
  const [recipientInputMode, setRecipientInputMode] = useState(RecipientInputMode.InvalidEntry)
  const [inputValue, setInputValue] = useState<string>('')
  const [pendingPeerAddressOrName, setPendingPeerAddressOrName] = useState<string>('')
  const { address: pendingAddress, isLoading } = useEns(pendingPeerAddressOrName)
  const { ensName: resolvedEnsName, address: resolvedAddress } = useEns(peerAddressOrName)

  const checkIfOnNetwork = useCallback(
    async (pendingAddress: string): Promise<boolean> => {
      console.log('test client: ', client, pendingAddress)
      return client?.canMessage(pendingAddress) || false
    },
    [client]
  )

  const completeSubmit = useCallback(async () => {
    console.log('test pendingAddr: ', pendingAddress)
    if (await checkIfOnNetwork(pendingAddress as string)) {
      console.log('test found peer in xmtp network: ', pendingPeerAddressOrName)
      onSubmit(pendingPeerAddressOrName)
      setRecipientInputMode(RecipientInputMode.Submitted)
    } else {
      console.log('test not found on xmtp network')
      setRecipientInputMode(RecipientInputMode.NotOnNetwork)
    }
  }, [checkIfOnNetwork, pendingAddress, pendingPeerAddressOrName, onSubmit])

  useEffect(() => {
    const handleRecipientInput = async () => {
      if (pendingPeerAddressOrName) {
        console.log('test 3: ')
        await completeSubmit()
        setPendingPeerAddressOrName('')
      } else {
        console.log('test 4: ')
        setRecipientInputMode(RecipientInputMode.InvalidEntry)
      }
    }
    handleRecipientInput()
  }, [
    peerAddressOrName,
    isLoading,
    pendingPeerAddressOrName,
    setRecipientInputMode,
    completeSubmit,
  ])

  const handleInputChange = async (e: React.SyntheticEvent) => {
    const data = e.target as typeof e.target & {
      value: string
    }
    console.log('test input: ', data.value)
    setInputValue(data.value)
  }

  const handleSubmit = async (e?: React.SyntheticEvent) => {
    if (e) e.preventDefault()
    // const data = e.target as typeof e.target & {
    //   input: { value: string }
    // }
    // const inputValue = value || data.input.value
    console.log('test set pending peeraddr or name: ', inputValue)
    setPendingPeerAddressOrName(inputValue)
  }

  useEffect(() => {
    if (inputValue.endsWith('.eth') || (inputValue.startsWith('0x') && inputValue.length === 42)) {
      handleSubmit()
    } else {
      setRecipientInputMode(RecipientInputMode.InvalidEntry)
    }
  }, [inputValue])

  return (
    <div className="flex-1 flex-col shrink justify-center flex h-[72px] bg-zinc-50 md:border-b md:border-gray-200 md:px-4 md:pb-[2px]">
      <form
        className="w-full flex pl-2 md:pl-0 h-8 pt-1"
        action="#"
        method="GET"
        onSubmit={handleSubmit}
      >
        <VStack alignItems={'start'}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Heading fontSize={'1xl'}>To:</Heading>
            {/* <Text style={{marginLeft: "1vw"}}>{truncateEthAddress(peerAddressOrName)}</Text> */}
            <Input
              value={inputValue}
              id="recipient-field"
              style={{
                color: 'white',
                width: '100%',
                borderRadius: '5px',
                backgroundColor: '#2E2D30',
                paddingTop: '0.5vw',
                paddingBottom: '0.5vw',
                paddingLeft: '1vw',
                paddingRight: '1vw',
                marginLeft: '1vw',
              }}
              // className="block w-[95%] pl-7 pr-3 pt-[3px] md:pt-[2px] md:pt-[1px] bg-transparent caret-n-600 text-n-600 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent text-lg font-mono"
              name="recipient"
              onChange={handleInputChange}
            />
          </div>
          <button type="submit" className="hidden" />
        </VStack>
      </form>

      {recipientInputMode === RecipientInputMode.Submitted ? (
        <div className="text-md text-n-300 text-sm font-mono ml-10 md:ml-8 pb-1 md:pb-[1px]">
          {resolvedEnsName ? resolvedAddress : <br />}
        </div>
      ) : (
        <div className="text-sm md:text-xs text-n-300 ml-[29px] pl-2 md:pl-0 pb-1 md:pb-[3px]">
          {recipientInputMode === RecipientInputMode.NotOnNetwork &&
            'Recipient is not on the XMTP network'}
          {recipientInputMode === RecipientInputMode.FindingEntry && 'Finding ENS domain...'}
          {recipientInputMode === RecipientInputMode.InvalidEntry &&
            'Please enter a valid wallet address'}
          {recipientInputMode === RecipientInputMode.ValidEntry && <br />}
        </div>
      )}
    </div>
  )
}

export default RecipientControl
