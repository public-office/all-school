import { Nav } from 'components/Nav'
import { styled } from 'stitches.config'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Header = styled('div', {
  position: 'relative',
  width: 'calc(100% - 10px)',
  top: '5px',
  left: '5px',
  zIndex: '10',
  fontSize: '$sans5',
  lineHeight: '$sans5',
  zIndex: '200',
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
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    padding: '0 var(--space-margin) var(--space-1)',
    h1: {
      gridColumn: 'span 3',
      letterSpacing: '-2px',
      mixBlendMode: 'difference',
      '&:hover': {
        color: 'red',
      },
      '@mobile': {
        fontSize: '$sans6',
        letterSpacing: '-0.05rem',
      },
      a: {
        TextDecoration: 'none !important',
        color: 'white',
        span: {
          '&.secondary': {
            display: 'none',
          },

        },
        '&:hover': {
          color: '#ccc !important',
        },
      },
    },
    '& ./': {
      h1: {
        a: {
          color: 'red',
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
  const router = useRouter();
  const { query } = router;
  const currentRoute = router.pathname;
  
  return (
    <Header>
      <div className={`${currentRoute} head`} id="top">
        <h1>
          <Link href="/">
            All School, by Next Wave
          </Link>
        </h1>
        <Nav />
      </div>
    </Header>
  );
};