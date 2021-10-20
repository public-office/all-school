import { styled } from 'stitches.config'

export const Button = styled('button', {
  borderRadius: '2em',
  background: '$bg',
  boxShadow: '$shadow',
  padding: '0.5rem 1.6rem',
  '&:hover': {
    color: '$highlight',
  },
})

export const Fieldset = styled('fieldset', {
  '&:not(:last-child)': {
    borderBottom: '1px solid',
  },
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  columnGap: '$gutter',
})

export const Label = styled('label', {
  padding: '1.5rem 0',
  width: '100%',
})

export const Input = styled('input', {
  padding: '1rem 0',
  width: '100%',
  '&::placeholder': {
    color: '$fg',
    opacity: 0.2,
  },
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

export const RadioGroup = styled('div', {
  display: 'flex',
  margin: 'auto 0',
})

export const RadioLabel = styled('label', {
  cursor: 'pointer',
  '&:hover': {
    color: '$highlight',
  },
})
