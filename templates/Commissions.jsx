import { Layout } from 'components/Layout'
import { styled } from 'stitches.config'
import { EssaySingle } from 'components/EssaySingle'
import { EssayList } from 'components/EssayList'
import { VideoList } from 'components/VideoList'

const Program = styled('div', {
  paddingTop: '2.5em',
  section: {
    padding: '1em',
  },
  h2: {
    fontSize: '$sans5',
    textAlign: 'center',
    position: 'relative',
    '.breadcrumb': {
      display: 'none',
    },
  },
  '.extra-content': {
    margin: '1.5em 8em',
    fontSize: '$sans2',
    letterSpacing: '0',
    lineHeight: '$sans2',
    display: 'block',
    p: {
      fontSize: '$sans2',
      letterSpacing: '0',
      lineHeight: '$sans2',
    },
    '@mobile': {
      margin: '1em .5em 1em 4em',
      fontSize: '$sans1',
      letterSpacing: '0',
      lineHeight: '$sans1',
    },
    '&_trigger': {
      color: 'black',
      '&:hover': {
        cursor: 'pointer',
      },
    },
  },
  p: {
    letterSpacing: '-2px',
    fontSize: '$sans4',
    lineHeight: '$sans4',
    margin: '0',
    maxWidth: '100%',
    whiteSpace: 'pre-wrap',
    overflowWrap: 'break-word',
    '@mobile': {
      fontSize: '$sans2',
      lineHeight: '$sans2',
      letterSpacing: '-1px',
    },
    a: {
      textDecoration: 'underline',
      textDecorationThickness: '0.3rem',
      textUnderlineOffset: '0.5rem',
      '@mobile': {
        textDecorationThickness: '0.15rem',
        textUnderlineOffset: '0.2rem',
      },
    },
  },
  '& .padded': {
    paddingTop: '1.1em',
    button: {
      color: 'black',
      textDecoration: 'underline',
      textDecorationThickness: '0.3rem',
      textUnderlineOffset: '0.5rem',
      '@mobile': {
        textDecorationThickness: '0.15rem',
        textUnderlineOffset: '0.2rem',
      },
      '&:hover': {
        color: '${setup.color}',
      },
    },
    a: {
      textDecoration: 'underline',
      textDecorationThickness: '0.25rem',
      textUnderlineOffset: '0.5rem',
    },
  },
  '.accordion': {
    display: 'flex',
    '&__panel': {
      padding: '1em 2em',
      maxWidth: '60%',
      p: {
        fontSize: '$sans2',
        letterSpacing: '0',
      },
    },
  },
  span: {
    '&.purple': {
      color: '$highlight',
    },
    '&.green': {
      color: '$green',
    },
    '&.orange': {
      color: '$orange',
    },
  },
})

export function Commissions({ page = {} }) {

  console.log(page.essays)

  return (
    <Layout>
      <h1>Commissions</h1>
    </Layout>
  )
}
