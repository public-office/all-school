import { styled } from 'stitches.config'
import { useState } from 'react'
import { Link, animateScroll as scroll } from 'react-scroll';

const MainNav = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  
  '.intro': {
    fontSize: 'var(--fontSizes-sans1)',
    lineHeight: '1.1',
    paddingTop: '.5em',
    '@mobile': {
      display: 'none',
    },
  },
  nav: {
    paddingTop: '.1em',
    paddingLeft: '6px',
    '&.show': {
      visibility: 'visible',
    },
    '@mobile': {
      // paddingLeft: '3rem',
    },
    a: {
      display: 'block',
      textDecoration: 'none',
      fontSize: 'var(--fontSizes-sans1)',
      letterSpacing: '-0.025rem',
      lineHeight: '1.1',
      '@mobile': {
        fontSize: 'var(--fontSizes-sans6)',
        letterSpacing: '-0.05rem',
        lineHeight: '1',
      },
      '&:hover': {
        cursor: 'pointer',
        color: 'white !important',
      },
    },
  },
  '.no-link': {
    // textDecoration: 'line-through',
    opacity: '0.25',
    pointerEvents: 'none',
  },
  '.nav-trigger': {
    color: 'black',
    paddingLeft: '.5rem',
    '&:hover': {
      cursor: 'pointer',
      color: '$green',
    },
    '@mobile': {
      // paddingLeft: '3rem',
    },
  },
})

export function Nav() {

  const [isVisible, setIsVisible] = useState(false)
  const menuState = (event) => {
    setIsVisible((isVisible) => !isVisible)
  }

  return (
    <MainNav>
      <div className="intro">
        A project by Next Wave<br></br> exploring artist-led learning experiences
      </div>

      <nav>
        <Link 
          onClick={menuState}
          to="about"
          smooth={true}
          offset={-20}
        >About</Link>
        <Link className="no-link" href="/commissions">Commissions</Link>
        <Link className="no-link" href="/events">Events</Link>
      </nav>
    </MainNav>
  );
}