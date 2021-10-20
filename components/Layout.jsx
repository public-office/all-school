import { PasswordProtected, usePasswordProtection } from 'components/PasswordProtected'

export default function Layout({ children }) {
  const { valid, checkPassword } = usePasswordProtection()
  return valid ? children : <PasswordProtected onCheckPassword={checkPassword} />
}
