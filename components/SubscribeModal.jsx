import { Modal } from 'components/Modal'
import { Button, Fieldset, Label, Input, RadioGroup, RadioLabel } from 'components/Forms'
import { styled } from 'stitches.config'
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import { useState, useEffect } from 'react';

const Form = styled('form', {
  '@mobile': {
    '.format': {
      display: 'none',
    },
  },
})

export function SubscribeModal(props) {

  const postUrl = 'https://nextwave.us3.list-manage.com/subscribe/post'

  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [postcode, setPostcode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      firstName &&
      lastName &&
      email.indexOf("@") > -1 &&
      postcode &&
      onValidated({
        EMAIL: email,
        MERGE1: firstName,
        MERGE2: lastName,
        MERGE3: postcode,
      });
  }

  return (
    <Modal {...props}>

      <Form className="mc__form" onSubmit={(e) => handleSubmit(e)} action={postUrl} method="post" class="validate" target="_blank" novalidate>
        <Fieldset css={{ marginTop: '-1.5rem' }}>
          <Label>Email address</Label>
          <Input
            label="email"
            name="email"
            onChangeHandler={setEmail}
            type="email"
            value={email}
            placeholder="your@email.com" 
            required>
          </Input>
        </Fieldset>

        <Fieldset>
          <Label>First name</Label>
          <Input 
            label="firstName"
            name="firstName"
            onChangeHandler={setFirstName}
            type="text"
            value={firstName}
            placeholder="First name"
            required>
          </Input>
        </Fieldset>

        <Fieldset>
          <Label>Last name</Label>
          <Input 
            label="Last Name"
            name="lastName" 
            onChangeHandler={setLastName}
            type="text" 
            value={lastName}
            placeholder="Last name"
            >
          </Input>
        </Fieldset>

        <Fieldset>
          <Label>Postcode</Label>
          <Input
            label="Postcode"
            name="postcode"
            onChangeHandler={setPostcode}
            type="text"
            value={postcode}
            placeholder="Postcode"
          >
          </Input>
        </Fieldset>

        <Fieldset className="format">
          <Label>Select relevant</Label>
          <RadioGroup>
            <RadioLabel>
              <Input 
                type="radio" 
                name="type" 
                value="artist" 
                checked />
              <span>Artist</span>
            </RadioLabel>
            <RadioLabel>
              <Input 
                type="radio" 
                name="type" 
                value="arts-worker"  />
              <span>Arts worker</span>
            </RadioLabel>
            <RadioLabel>
              <Input 
                type="radio" 
                name="type" 
                value="arts-interested" />
              <span>Arts interested</span>
            </RadioLabel>
          </RadioGroup>
        </Fieldset>

        <Fieldset className="format">
          <Label>Preferred format</Label>
          <RadioGroup>
            <RadioLabel>
              <Input 
                type="radio" 
                name="type" 
                value="html" 
                checked />
              <span>HTML</span>
            </RadioLabel>
            <RadioLabel>
              <Input 
                type="radio" 
                name="type" 
                value="plain" />
              <span>Plain text</span>
            </RadioLabel>
          </RadioGroup>
        </Fieldset>

        <Fieldset css={{ marginTop: '$gutter', gridTemplateColumns: '1fr' }}>
          <Button
            label="subscribe"
            type="submit"
            formValues={[email, firstName, lastName, postcode]}
            >Subscribe
          </Button>
        </Fieldset>
      </Form>
    </Modal>
  )
}
