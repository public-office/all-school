import { Nav } from 'components/Nav'
import { styled } from 'stitches.config'
import Link from 'next/link'

const Header = styled('div', {
  position: 'relative',
  width: '100%',
  top: '0',
  zIndex: '10',
  fontSize: '$sans5',
  lineHeight: '$sans5',
  '&:hover': {
    cursor: 'pointer',
  },
  'h1': {
    '&:hover': {
      'span': {
        color: 'black',
      },
    },
    a: {
      '&:hover': {
        color: 'white !important',
        textDecoration: 'none',
      },
    },
  },
  '@mobile': {
    padding: '0 8px',
    letterSpacing: '0',
  },
  '.head': {
    position: 'sticky',
    top: '.15em',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    padding: '0 var(--space-margin) var(--space-1)',
    h1: {
      letterSpacing: '-2px',
      '@mobile': {
        fontSize: '$sans6',
        letterSpacing: '-0.05rem',
      },
      a: {
        TextDecoration: 'none !important',
        span: {
          '&.secondary': {
            display: 'none',
          },

        },
        '&:hover': {
          color: 'white',
        },
      },
    },
    '@mobile': {
      paddingTop: '0.2em',
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

export function SiteHeader() {

  return (
    <Header>
      <div className="head" id="top">
        <h1>
          <Link href="/">
            <span>All School</span>
          </Link>
        </h1>
        <Nav />
      </div>
    </Header>
  );
};