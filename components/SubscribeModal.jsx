import { Modal } from 'components/Modal'
import { SubscribeForm } from './SubscribeForm'

export function SubscribeModal({ onClose, ...props }) {
  return (
    <Modal {...props}>
      <SubscribeForm onClose={onClose} />
    </Modal>
  )
}
