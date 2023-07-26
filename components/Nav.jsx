import { styled } from 'stitches.config'
import { useState } from 'react'
import Link from 'next/link'
import PreventOutsideScroll from 'react-prevent-outside-scroll'

const PANE_LAYER = 10000

const MainNav = styled('div', {
  display: 'grid',
  
  '.intro': {
    fontSize: '$sans1',
    lineHeight: '1.1',
    paddingTop: '.5em',
    '@mobile': {
      display: 'none',
    },
  },
  nav: {
    padding: '0.125em .25em',
    width: '50vw',
    backgroundColor: 'white',
    position: 'fixed',
    top: '0',
    right: '0',
    height: '100vh',
    zIndex: '200',
    transform: 'translateX(100%)',
    transition: 'transform .35s ease-in-out',
    '.acknowledgement': {
      position: 'absolute',
      width: 'calc(100% - .5em)',
      left: '.25em',
      bottom: '.25em',
      p: {
        fontSize: '$sans1',
      },
    },
    '.nav_close': {
      position: 'absolute',
      top: '1em',
      right: '1em',
      fontSize: '$sans1',
      '&:hover': {
        color: '#ccc',
        cursor: 'pointer',
      },
    },
    '&.show': {
      visibility: 'visible',
    },
    '@mobile': {
      // paddingLeft: '3rem',
    },
    a: {
      display: 'table',
      textDecoration: 'none',
      fontSize: '$sans5',
      letterSpacing: '-2px',
      lineHeight: '1',
      '@mobile': {
        fontSize: '$sans6',
        letterSpacing: '-0.05rem',
        lineHeight: '1',
      },
      '&:hover': {
        cursor: 'pointer',
        color: '#ccc',
      },
    },
  },
  '.no-link': {
    opacity: '0.25',
    pointerEvents: 'none',
  },
  '.nav_trigger': {
    color: 'white',
    textAlign: 'right',
    '&:hover': {
      cursor: 'pointer',
      color: '#ccc',
    },
    '@mobile': {
      // paddingLeft: '3rem',
    },
  },
})

const Blanket = styled('div', {
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: PANE_LAYER - 1,
  width: '100%',
  height: '100%',
})

export function Nav({show = true, onClose = () => {}}) {

  const [display, setDisplay] = useState(false)

  return (
    <MainNav>
      <span className="nav_trigger" onClick={() => setDisplay((prevDisplay) => !prevDisplay)}>Menu</span>
      <PreventOutsideScroll>
        <nav style={{ transform: display ? "translateX(0)" : "translateX(100%)" }}>
          <span className="nav_close" onClick={() => setDisplay((prevDisplay) => !prevDisplay)}>Close</span>
          {/* <Link href="/about">About</Link> */}
          <Link href="/commissions">Commissions</Link>
          <Link href="/events">Events</Link>
          <span className="acknowledgement"><p>All School Lab is supported by the Helen Macpherson Smith Trust Foundation, Creative Partnerships Australia, City of Melbourne, the Besen Foundation and Deakin University. Next Wave is generously supported by Creative Victoria and Merri-bek City Council.</p></span>
        </nav>
      </PreventOutsideScroll>
    </MainNav>
  );
}