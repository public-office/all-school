import { styled } from 'stitches.config';
import { useState } from 'react';
import Link from 'next/link';

const MainNav = styled('div', {
  nav: {
    paddingLeft: '6px',
    a: {
      display: 'block',
      textDecoration: 'none',
      '&:hover': {
        color: '$green',
      },
    },
  },

  '.nav-trigger': {
    display: 'none',
    paddingLeft: '.5rem',
    '&:hover': {
      cursor: 'pointer',
      color: '$green',
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

      {isVisible && (
        <nav>
          <Link href="#about">About</Link>
          <Link href="#lab">LAB</Link>
        </nav>
      )}
    </MainNav>
  );
}