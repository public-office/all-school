import { styled } from 'stitches.config'
import { Link, animateScroll as scroll } from 'react-scroll';
import { useEffect, useState } from 'react'

const StickyNav = styled('div', {
  position: 'fixed',
  left: '50%',
  transform: 'translateX(-50%)',
  top: '1em',
  padding: '.15em 1em',
  fontSize: '$sans2',
  letterSpacing: '-0.025rem',
  lineHeight: '1.1',
  background: '#f7f7f7',
  borderRadius: '1em',
  transition: 'top .5s ease-in-out',
  zIndex: '200',
  '@mobile': {
    fontSize: '$sans5',
  },
  '&.visible': {
    top: '1em',
  },
  top: '-4em',
  nav: {
    a: {
      // '&:not(:last-of-type):after': {
      //   content: ', ',
      // },
      paddingRight: '.5em',
      '&:hover': {
        textDecoration: 'none',
      },
    },
  },
  '.no-link': {
    // textDecoration: 'line-through',
    opacity: '0.25',
    pointerEvents: 'none',
    '@mobile': {
      display: 'none',
    },
  },
})

export function FloatingNav() {

  const [scroll, setScroll] = useState(false);
  const [isVisible, setIsVisible] = useState(false)
  const menuState = (event) => {
    setIsVisible((isVisible) => !isVisible)
  }
  
  useEffect(() => {
    let isMounted = true;
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 150);
    });
  }, []);

  return(
    <StickyNav className={scroll ? "visible" : ""}>
      <nav>
        <Link
          onClick={menuState}
          to="top"
          smooth={true}
          offset={-20}
        >Home</Link>
        <Link
          onClick={menuState}
          to="about"
          smooth={true}
          offset={-20}
        >About</Link>
        <a className="no-link" href="/commissions">Commissions</a>
        <a className="no-link" href="/events">Events</a>
      </nav>
    </StickyNav>
  )
}