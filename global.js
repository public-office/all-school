import { globalCss } from './stitches.config'

export default globalCss({
  '@font-face': [
    {
      fontFamily: 'Synt',
      src: `url('/fonts/DinamoSynt-Regular.woff')`,
    },
    {
      fontFamily: 'Neue Haas Grotesk',
      src: `url('/fonts/NHaasGroteskTXPro-65Md.woff')`,
    },
  ],
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    font: 'inherit',
    appearance: 'none',
    border: 'none',
    background: 'none',
    outline: 'none',
  },
  a: {
    color: 'inherit',
    textDecorationThickness: '0.05em',
    textUnderlineUffset: '0.075em',
    '&:hover': {
      color: '$highlight',
      textDecorationLine: 'underline',
    },
  },
  body: {
    fontSize: '$sans1',
    fontFamily: '$sans',
    lineHeight: '$sans1',
    width: '100vw',
    overflowX: 'hidden',
  },
  'p:not(:last-child)': {
    marginBottom: '1.2em',
  },
  img: {
    display: 'block',
    maxWidth: '100%',
  },
  figcaption: {
    fontFamily: '$serif',
    fontSize: '$serif1',
    marginTop: '$1',
    marginBottom: '1.2em',
  },
  button: {
    cursor: 'pointer',
  },
})
