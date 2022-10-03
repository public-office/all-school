import { styled } from 'stitches.config';
import { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

const MainNav = styled('div', {
  nav: {
    visibility: 'hidden',
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
      '&:hover': {
        cursor: 'pointer',
        color: '$green',
      },
    },
  },

  '.nav-trigger': {
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
      <button className="nav-trigger" onClick={menuState}>{isVisible ? 'Close' : 'Menu'}</button>

      <nav className={isVisible ? 'show' : ''}>
        <Link 
          to="about"
          smooth={true}
          offset={-20}
          >About</Link>
        <Link 
          to="lab"
          smooth={true}
          offset={-20}
        >LAB</Link>
      </nav>
    </MainNav>
  );
}