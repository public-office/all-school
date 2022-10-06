import { Modal } from 'components/Modal'
import { SubscribeForm } from './SubscribeForm'

export function SubscribeModal({ onClose, ...props }) {
  return (
    <Modal onClose={onClose} {...props}>
      <SubscribeForm onClose={onClose} />
    </Modal>
  )
}
