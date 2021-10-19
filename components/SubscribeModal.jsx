import Modal from 'components/Modal'
import { styled } from 'stitches.config'

const Button = styled('button', {
  borderRadius: '2em',
  background: '$bg',
  boxShadow: '$shadow',
  padding: '0.5rem 1.6rem',
  '&:hover': {
    color: '$highlight',
  },
})

const Fieldset = styled('fieldset', {
  '&:not(:last-child)': {
    borderBottom: '1px solid',
  },
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  columnGap: '$gutter',
})

const Label = styled('label', {
  padding: '1.5rem 0',
  width: '100%',
})

const Input = styled('input', {
  padding: '1rem 0',
  width: '100%',
  '&[type="radio"]': {
    display: 'none',
  },
  '&[type="radio"] + span': {
    borderRadius: '2em',
    background: '$bg',
    padding: '0.5rem 1.6rem',
    position: 'relative',
  },
  '&[type="radio"][checked] + span': {
    boxShadow: '$shadow',
    zIndex: 2,
  },
})

const RadioGroup = styled('div', {
  display: 'flex',
  margin: 'auto 0',
})
const RadioLabel = styled('label', {
  cursor: 'pointer',
  '&:hover': {
    color: '$highlight',
  },
})

export default function SubscribeModal(props) {
  return (
    <Modal {...props}>
      <form>
        <Fieldset css={{ marginTop: '-1.5rem' }}>
          <Label>Email address</Label>
          <Input name="email" type="email" required></Input>
        </Fieldset>

        <Fieldset>
          <Label>First name</Label>
          <Input name="firstName" type="text"></Input>
        </Fieldset>

        <Fieldset>
          <Label>Last name</Label>
          <Input name="lastName" type="text"></Input>
        </Fieldset>

        <Fieldset>
          <Label>Preferred format</Label>
          <RadioGroup>
            <RadioLabel>
              <Input type="radio" name="type" value="html" checked />
              <span>HTML</span>
            </RadioLabel>
            <RadioLabel>
              <Input type="radio" name="type" value="plain" />
              <span>Plain text</span>
            </RadioLabel>
          </RadioGroup>
        </Fieldset>

        <Fieldset css={{ marginTop: '$gutter', gridTemplateColumns: '1fr' }}>
          <Button type="submit">Subscribe</Button>
        </Fieldset>
      </form>
    </Modal>
  )
}
