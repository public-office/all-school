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
  gridTemplateColumns: 'repeat(3, 1fr)',
  columnGap: '$gutter',
  button: {
    width: '10rem',
    margin: '0 auto',
  },
})

export const Label = styled('label', {
  gridColumn: 'span 1',
  padding: '1.2rem 0',
  width: '100%',
})

export const Input = styled('input', {
  gridColumn: 'span 2',
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
    padding: '0.5rem 1rem',
    position: 'relative',
  },
  '&[type="radio"][checked] + span': {
    boxShadow: '$shadow',
    zIndex: 2,
  },
})

export const RadioGroup = styled('div', {
  gridColumn: 'span 2',
  display: 'flex',
  margin: 'auto 0',
})

export const RadioLabel = styled('label', {
  cursor: 'pointer',
  '&:hover': {
    color: '$highlight',
  },
})
