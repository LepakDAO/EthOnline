import styled from 'styled-components'
import { useAccount, useConnect, useDisconnect, useNetwork } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { Button } from './Button'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { env } from '@shared/environment'
import { supportedChains } from '@shared/wagmiClient'
import toast from 'react-hot-toast'

export default function ConnectWallet() {
  const [hasJoined, setHasJoined] = useState(false)
  const router = useRouter()
  const { address, isConnected } = useAccount()
  const { chain } = useNetwork()
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })
  const { disconnect } = useDisconnect()
  const handleConnect = () => {
    connect()
  }

  // console.log("testing supported chain ids", chain, env.supportedChains);

  useEffect(() => {
    if (isConnected) {
      // router.push("/dashboard");
      const checkRegistration = async () => {
        // await
        //setHasJoined(true)
      }
      const connectionSuppported = env.supportedChains.filter((item: any) => {
        return item == chain!.id
      })
      if (!connectionSuppported.length)
        toast.error('Network not supported, please use Mumbai or Skale')
    }
  }, [isConnected, chain])

  //   useEffect(() => {
  //     if (hasJoined) {
  //       router.push("/register");
  //     } else {
  //       router.push("/dashboard");
  //     }
  //   }, [hasJoined]);

  return (
    <Wrapper>
      {isConnected ? (
        <StyledButton onClick={() => disconnect()}>
          {address?.slice(0, 5)}...{address?.slice(-4)}
        </StyledButton>
      ) : (
        <StyledButton onClick={handleConnect}>Connect Wallet</StyledButton>
      )}
      {/* <ConnectButton/> */}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  font-weight: bold;
  font-size: 0.7vw;
`

const StyledButton = styled(Button)`
  width: 10vw;
  height: 2vw;
`
