import { Button, Fieldset, Label, Input, RadioGroup, RadioLabel } from 'components/Forms'
import { styled } from 'stitches.config'
import { useState } from 'react'

const Form = styled('form', {
  '@mobile': {
    '.format': {
      display: 'none',
    },
  },
})

const SuccessMessage = styled('div')

export function SubscribeForm({ onClose, ...props }) {
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)

  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [postcode, setPostcode] = useState('')
  const [description, setDescription] = useState('Arts worker')
  const [format, setFormat] = useState('html')

  const resetFields = () => {
    setEmail('')
    setFirstName('')
    setLastName('')
    setPostcode('')
    setDescription('Arts worker')
    setFormat('html')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    setError(null)
    setSuccess(null)

    const fields = {
      EMAIL: email,
      FNAME: firstName,
      LNAME: lastName,
      POSTCODE: postcode,
      MMERGE4: description,
      EMAILTYPE: format,
    }

    const formData = new FormData()

    Object.entries(fields).forEach(([key, value]) => formData.append(key, value))

    const data = await fetch('/mailchimp', {
      method: 'post',
      body: formData,
    }).then((res) => res.json())

    console.log(data)

    if (data?.result === 'success') {
      setSuccess(data?.msg || 'Thank you for subscribing!')
      resetFields()
    } else {
      setError(data?.msg || 'Subscribe failed')
    }
  }

  function handleClose() {
    if (typeof onClose === 'function') onClose()

    setError(null)
    setSuccess(null)

    resetFields()
  }

  if (success)
    return (
      <div>
        <SuccessMessage>{success}</SuccessMessage>
        <br />
        <br />
        <br />
        <Button onClick={handleClose}>Close</Button>
      </div>
    )

  return (
    <Form className="mc__form" onSubmit={(e) => handleSubmit(e)}>
      <Fieldset css={{ marginTop: '-1.5rem' }}>
        <Label>Email address</Label>
        <Input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          value={email}
          placeholder="your@email.com"
          required
        ></Input>
      </Fieldset>

      <Fieldset>
        <Label>First name</Label>
        <Input
          onChange={(e) => setFirstName(e.target.value)}
          type="text"
          value={firstName}
          placeholder="First name"
          required
        ></Input>
      </Fieldset>

      <Fieldset>
        <Label>Last name</Label>
        <Input
          onChange={(e) => setLastName(e.target.value)}
          type="text"
          value={lastName}
          placeholder="Last name"
        ></Input>
      </Fieldset>

      <Fieldset>
        <Label>Postcode</Label>
        <Input
          label="Postcode"
          onChange={(e) => setPostcode(e.target.value)}
          type="text"
          value={postcode}
          placeholder="Postcode"
        ></Input>
      </Fieldset>

      <Fieldset className="format">
        <Label>Select relevant</Label>
        <RadioGroup>
          <RadioLabel onClick={() => setDescription('Artist')}>
            <Input type="radio" data-checked={description === 'Artist' || undefined} />
            <span>Artist</span>
          </RadioLabel>
          <RadioLabel onClick={() => setDescription('Arts worker')}>
            <Input
              type="radio"
              data-checked={description === 'Arts worker' || undefined}
            />
            <span>Arts worker</span>
          </RadioLabel>
          <RadioLabel onClick={() => setDescription('Arts interested')}>
            <Input
              type="radio"
              data-checked={description === 'Arts interested' || undefined}
            />
            <span>Arts interested</span>
          </RadioLabel>
        </RadioGroup>
      </Fieldset>

      <Fieldset className="format">
        <Label>Preferred format</Label>
        <RadioGroup>
          <RadioLabel onClick={() => setFormat('html')}>
            <Input type="radio" data-checked={format === 'html' || undefined} />
            <span>HTML</span>
          </RadioLabel>
          <RadioLabel onClick={() => setFormat('text')}>
            <Input type="radio" data-checked={format === 'text' || undefined} />
            <span>Plain text</span>
          </RadioLabel>
        </RadioGroup>
      </Fieldset>

      {error && <p>{error}</p>}

      <Fieldset css={{ marginTop: '$gutter', gridTemplateColumns: '1fr' }}>
        <Button label="subscribe" type="submit">
          Subscribe
        </Button>
      </Fieldset>
    </Form>
  )
}
