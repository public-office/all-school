import { Nav } from 'components/Nav'
import { styled } from 'stitches.config'
import Link from 'next/link'

const Header = styled('div', {
  position: 'relative',
  width: '100%',
  top: '0',
  zIndex: '10',
  fontSize: '$sans4',
  lineHeight: '$sans4',
  padding: '0 var(--space-margin) var(--space-1)',
  '&:hover': {
    cursor: 'pointer',
  },
  'h1': {
    '&:hover': {
      'span': {
        color: 'black',
      },
    },
  },
  '@mobile': {
    fontSize: '$sans2',
    lineHeight: '$sans2',
    padding: '0 8px',
  },
  '.head': {
    position: 'sticky',
    top: '.15em',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    '@mobile': {
      top: '.25em',
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
      <div className="head">
        <h1>
          <Link href="/">
            <span>
              <span className="purple">A</span>
              <span className="orange">l</span>
              <span className="green">l</span> <span className="purple">S</span>
              <span className="orange">c</span>
              <span className="green">h</span>
              <span className="purple">o</span>
              <span className="orange">o</span>
              <span className="green">l</span>
            </span>
          </Link>
        </h1>
        <Nav />
      </div>
    </Header>
  );
};