import Modal from 'components/Modal'
import { Label, Input, Button, Fieldset } from 'components/Forms'
import { useForm } from 'react-hook-form'
import { useState, useMemo, useEffect } from 'react'
import { useCallback } from 'react'
import { useLocalStorage } from 'react-use'

const PASSWORD = 'a0561fd649cdb6baa784055f051bad796ea0afef17fca38219549deeba4e8c1a' // access

export const usePasswordProtection = () => {
  const [savedPasswordHash, setSavedPasswordHash] = useLocalStorage('passwordHash')

  const checkPassword = useCallback(async (password) => {
    const enc = new TextEncoder()
    const payload = enc.encode(password)
    const digest = await crypto.subtle.digest('sha-256', payload)
    const passwordHash = Array.prototype.map
      .call(new Uint8Array(digest), (x) => ('00' + x.toString(16)).slice(-2))
      .join('')

    const valid = passwordHash === PASSWORD

    if (valid) {
      setSavedPasswordHash(passwordHash)
    }

    return { valid, passwordHash }
  }, [])

  const [validState, setValidState] = useState(false)

  useEffect(() => {
    setValidState(savedPasswordHash === PASSWORD)
  }, [savedPasswordHash])

  return { valid: validState, checkPassword }
}

export function PasswordProtected({ onCheckPassword }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    const { valid, passwordHash } = await onCheckPassword(data.password)
  }

  return (
    <Modal>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>
          This site is password protected. <br />
          Enter the password to continue
        </p>
        <Fieldset>
          <Label>Password</Label>
          <Input
            type="password"
            placeholder="••••••••"
            {...register('password', { required: true })}
          />
        </Fieldset>
        <Fieldset css={{ marginTop: '$gutter', gridTemplateColumns: '1fr' }}>
          <Button type="submit">Submit</Button>
        </Fieldset>
      </form>
    </Modal>
  )
}
