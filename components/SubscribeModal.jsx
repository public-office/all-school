import Modal from 'components/Modal'
import { Button, Fieldset, Label, Input, RadioGroup, RadioLabel } from 'components/Forms'

export default function SubscribeModal(props) {
  return (
    <Modal {...props}>
      <form>
        <Fieldset css={{ marginTop: '-1.5rem' }}>
          <Label>Email address</Label>
          <Input name="email" type="email" placeholder="your@email.com" required></Input>
        </Fieldset>

        <Fieldset>
          <Label>First name</Label>
          <Input name="firstName" type="text" placeholder="First name"></Input>
        </Fieldset>

        <Fieldset>
          <Label>Last name</Label>
          <Input name="lastName" type="text" placeholder="Last name"></Input>
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
