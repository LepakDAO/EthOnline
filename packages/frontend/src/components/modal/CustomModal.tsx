import { KeyboardEvent, MouseEvent as ReactMouseEvent, PropsWithChildren } from 'react'
import Modal from 'react-modal'
import ModalContainer from './ModalContainer'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#151419',
    borderRadius: '25px',
    padding: '2rem',
    width: '35vw',
    height: 'auto',
    color: '#ffffff',
    paddingTop: '2vw',
    paddingBottom: '3vw',
    fontSize: '2vw',
    fontFamily: 'Montserrat',
    border: '2px solid #1D1B24',
  },
  overlay: {
    backgroundColor: 'rgba(20, 20, 35, 0.55)',
    backdropFilter: 'blur(15px)',
  },
}

export function CustomModal({
  title,
  isOpen,
  onClose,
  children,
}: PropsWithChildren<{
  title: string
  isOpen: boolean
  onClose: (e: ReactMouseEvent<Element, MouseEvent> | KeyboardEvent<Element>) => void
}>) {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
      <ModalContainer onCloseClick={onClose} title={title}>
        {children}
      </ModalContainer>
    </Modal>
  )
}
