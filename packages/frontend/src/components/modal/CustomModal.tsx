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
    width: '707px',
    height: '999px',
    color: '#ffffff',
    fontSize: '40px',
    fontFamily: 'Montserrat',
  },
  overlay: {
    backgroundColor: 'rgba(168, 180, 202, 0.75)',
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
