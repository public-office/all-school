import React from 'react'
import { Pane } from 'components/Pane'
import { SubscribeModal } from 'components/SubscribeModal'
import { theme, createTheme, styled } from 'stitches.config'
import FastMarquee from 'react-fast-marquee'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Disc } from 'components/Disc'
import { Chatbot } from 'components/Chatbot'
import { useState } from 'react'
import { useScreenOptionsContext } from 'hooks/useScreenOptions'
import { Template } from 'components/Template'
import { Markdown } from 'components/Markdown'
import { Nav } from 'components/Nav'
import { Logos } from 'components/Logos'
import { EventsList } from 'components/EventsList'
import clsx from 'classnames'
// import { useEffect, useRef} from 'react'
import { SubscribeForm } from 'components/SubscribeForm'

const Page = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  position: 'relative',
})

const Subscribe = styled('div', {
  fontSize: '$sans4',
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
  padding: '2em $margin 1em',
  p: {
    letterSpacing: '-2px',
  },
  '& .button': {
    a: {
      letterSpacing: '-2px',
      padding: '2px .4em',
      textDecoration: 'none',
      border: '3px solid',
      borderRadius: '2em',
      position: 'sticky',
      top: '1em',
      '@mobile': {
        border: '0.15rem solid',
        letterSpacing: '-1px',
      },
    },
  },
})

const Sticky = styled('div', {
  width: '16rem',
  right: '$margin2',
  position: 'fixed',
  right: '1.5em',
  top: '1.5em',
  zIndex: 2,
  '.disc-wrapper': {
    borderRadius: '50%',
    width: '16rem',
    position: 'absolute',
    top: '0',
    zIndex: 2,
    '@mobile': {
      width: '165px',
    },
  },
  '@mobile': {
    right: '.5em',
    top: '3em',
    position: 'absolute',
    width: '165px',
    // display:'none',
  },
})

const marqueeStyle = {
  fontFamily: '$serif',
  fontSize: '$serif1',
  paddingTop: '$1',
  letterSpacing: '0.025rem',
  textTransform: 'uppercase',
  zIndex: '100',
  '@mobile': {
    fontSize: '0.8rem',
    paddingTop: '0.5rem',
  },
}

const Marquee = styled(FastMarquee, {
  ...marqueeStyle,
  whiteSpace: 'nowrap',
  overflow: 'hidden',
})

const StaticMarquee = styled('div', {
  ...marqueeStyle,
  paddingLeft: '$margin',
  marginBottom: '$1',
})

const Header = styled('div', {
  position: 'relative',
  width: '100%',
  top: '0',
  zIndex: '10',
  fontSize: '$sans4',
  lineHeight: '$sans4',
  padding: '0 var(--space-margin) var(--space-1)',
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

const HeroText = styled('div', {
  fontSize: '$sans4',
  lineHeight: '$sans4',
  height: '100vh',
  position: 'relative',
  top: '0',
  '.hide': {
    display: 'none',
  },
  '@mobile': {
    fontSize: '$sans3',
    lineHeight: '$sans3',
    marginBottom: '$margin',
  },
  '.intro': {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridColumnGap: '0',
    gridAutoRows: 'calc(50vh + 4px)',
    marginBottom: '2em',
    marginTop: '-19.5rem',
    '@mobile': {
      marginTop: '-8rem',
    },
  },
  '.fade-me': {
    animation: 'fadeIn 2s linear',
  },
  '.fade-me.none': {
    display: 'none',
  },

  div: {
    '&.color-block': {
      // background: '$purple',
      // '&:hover': {
      //   borderRadius: '.5em',
      // }
    },
    '&.image-one': {
      backgroundSize: 'cover',
      backgroundPosition: 'top left',
      // '&:hover': {
      //   borderRadius: '.5em',
      // }
    },
    '&.image-two': {
      backgroundSize: 'cover',
      backgroundPosition: 'top left',
      // '&:hover': {
      //   borderRadius: '.5em',
      // }
    },
  },
  // padding: '0 $margin $margin',
  zIndex: 2,
  position: 'relative',
  h1: {
    // marginTop: '-.25em',
    letterSpacing: '-2px',
    paddingLeft: 'var(--space-margin)',
  },
  p: {
    letterSpacing: '-2px',
    paddingLeft: 'var(--space-margin)',
  },
  '& p:not(:last-child)': {
    marginBottom: '0.5em',
  },
})

const Main = styled('div', {
  width: '100vw',
  minHeight: '110vh',
  position: 'relative',
  whiteSpace: 'nowrap',
  padding: '.25em $margin $margin',
  marginTop: '-10em',
  zIndex: 2,
  '@mobile': {
    marginTop: '-6em',
  },
  '.extra-content': {
    margin: '1em 8em',
    fontSize: '$sans2',
    letterSpacing: '0',
    lineHeight: '$sans2',
    '@mobile': {
      margin: '1em .5em 1em 4em',
      fontSize: '$sans1',
      letterSpacing: '0',
      lineHeight: '$sans1',
    },
    '&_trigger': {
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
    }
  },
  '& .padded': {
    paddingTop: '1.1em',
    button: {
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
      textDecorationThickness: '0.3rem',
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

const New = styled('div', {
  p: {
    letterSpacing: '-2px',
    fontSize: '$sans4',
    lineHeight: '$sans4',
    margin: '0',
    maxWidth: '100%',
  },
})

const HeroImage = styled('figure', {
  borderRadius: '3rem',
  overflow: 'hidden',
  margin: '0 $margin',
  '@mobile': {
    marginTop: 'auto',
  },
  '@desktop': {
    margin: 0,
    position: 'absolute',
    bottom: '4.4rem',
    right: '$margin',
    left: 'calc(50% + $margin / 2)',
  },
})

const Networked = styled('figure', {
  maxWidth: '25%',
  margin: '0 auto',
  paddingTop: '8em',
  paddingBottom: '8em',
})

const Footer = styled('div', {
  alignItems: 'flex-end',
  width: '100%',
  padding: '$margin $margin $1',
  marginTop: 'auto',
  columnGap: '$gutter',
  position: 'fixed',
  zIndex: '20',
  left: '0',
  bottom: '0',
  '@mobile': {
    padding: '0 8px',
  },
  '&.green': {
    color: 'black',
    a: {
      background: 'white',
    },
  },
  '.desktop': {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    // '@mobile': {
    //   gridTemplateColumns: '1fr',
    // },
  },
  '.screen-options': {
    marginTop: '6px',
    '@mobile': {
      display: 'none',
    },
  },
  nav: {
    display: 'flex',
    gap: '.6em',
    '@mobile': {
      gap: '.3em',
    },
    a: {
      textDecoration: 'none',
      textTransform: 'uppercase',
      fontSize: '$sans1',
      background: 'white',
      padding: '6px 16px',
      borderRadius: '1em',
    },
    '&.socials a:last-child': {
      marginLeft: 'auto',
    },
    figcaption: {
      maxWidth: '39em',
    },
  },
  '.auslan': {
    display: 'none',
  },
  '@mobile': {
    '.desktop': {
      // display: 'none',
    },
    marginTop: 0,
    paddingTop: 0,
    figcaption: {
      gridColumn: 'span 2',
      marginBottom: '$margin',
    },
    '.auslan, .chatbot, .access': {
      display: 'none',
    },
    nav: {
      display: 'flex',
      '.chatbot': {
        width: '100%',
      },
    },
  },
})

const PopdownWrapper = styled('div', {
  position: 'relative',
  whiteSpace: 'nowrap',
})

const PopdownOptions = styled('div', {
  position: 'absolute',
  bottom: 'calc(0rem - $1)',
  left: '50%',
  transform: 'translateX(-50%)',
  background: '${setup.color}',
  padding: '$1 3rem',
  textAlign: 'center',
  borderRadius: '1em',
  boxShadow: '$shadow',
  button: {
    '&:hover': {
      color: '${setup.color}',
    },
    '&.selected': {
      '&:after': {
        content: ' ✔',
      },
    },
  },
})

const popdownTheme = createTheme({
  colors: {
    bg: theme.colors.highlight.value,
    highlight: theme.colors.bg.value,
  },
})

function Popdown({ label, options, className, value, onChange, paneTheme }) {
  const [open, setOpen] = useState(false)

  const handleClick = (e) => {
    e.preventDefault()
    setOpen(!open)
  }

  const handleClickOption = (e, option) => {
    e.preventDefault()
    onChange(option.name, !option.checked)
    setIsExpanded(!isExpanded)
  }

  return (
    <PopdownWrapper className={className}>
      <a href="#" onClick={handleClick}>
        {label}
      </a>
      {open && (
        <PopdownOptions className={popdownTheme}>
          <div>
            <a href="#" onClick={handleClick}>
              {label}
            </a>
          </div>
          <br />
          {options.map((option, idx) => (
            <div key={idx}>
              <button
                onClick={(e) => handleClickOption(e, option)}
                className={clsx({ selected: option.checked })}
              >
                {option.label}
              </button>
            </div>
          ))}
        </PopdownOptions>
      )}
    </PopdownWrapper>
  )
}

export function Landing({ page = {} }) {
  const router = useRouter()
  const { query } = router

  // const { isExpanded, setIsExpanded } = useState(false);
  // function ariaControls() {
  //   setIsExpanded((isExpanded) => !isExpanded)
  // }

  console.log(page.setup.color);

  const showAuslanPane = ['auslan', 'access'].includes(query.slug)
  const showSubscribeModal = query.slug === 'subscribe'
  const showChatbot = query.slug === 'chatbot'

  const {
    screenOptions,
    screenOptions: { motion },
    setScreenOption,
  } = useScreenOptionsContext()

  return (
    <Template data-theme={page.setup.color}>
      {motion ? (
        <Marquee gradient={false}>{page.marquee}</Marquee>
      ) : (
        <StaticMarquee>{page.marquee}</StaticMarquee>
      )}

      <SubscribeModal
        show={showSubscribeModal}
        onClose={() => router.replace('/', undefined, { scroll: false }) }
      />

      <Header>
        <div className="head">
          <h1>
            <span className="purple">A</span>
            <span className="orange">l</span>
            <span className="green">l</span> <span className="purple">S</span>
            <span className="orange">c</span>
            <span className="green">h</span>
            <span className="purple">o</span>
            <span className="orange">o</span>
            <span className="green">l</span>
          </h1>
          <Nav />
        </div>
      </Header>

      <HeroText>
        <div className="intro">
          <div></div>
          <div className="color-block" style={{background: `${page.setup.color}`}}></div>
          <div className="image-one fade-me" style={{ backgroundImage: 'url(' + page.setup.img1 + ')' }}></div>
          <div className="image-two fade-me" style={{ backgroundImage: 'url(' + page.setup.img2 + ')' }}></div>
        </div>
      </HeroText>

      <Main>
        <div id="about">
          <Markdown>{page.information}</Markdown>
        </div>

        <EventsList events={page.events} />

        <Logos 
          nextWaveLogos={page.nextWaveLogos} 
          allSchoolLogos={page.allSchoolLogos}
        ></Logos>

      </Main>

      <Sticky>
        <div className="disc-wrapper" style={{ background: `${page.setup.color}` }}>
          <Disc />
        </div>
      </Sticky>

      <Pane
        show={showAuslanPane}
        onClose={() => router.replace('/', undefined, { scroll: false })}
      >
        <Markdown>{page.access}</Markdown>
      </Pane>

      <Chatbot
        onClose={() => router.replace('/', undefined, { scroll: false })}
        show={showChatbot}
      />

      <Footer>
        <div className="desktop">
          <div>
            <nav className="tools">
              <Link href="/access" scroll={false}>
                <a className="access">Access</a>
              </Link>
              <Link href="/auslan" scroll={false}>
                <a className="auslan">Auslan</a>
              </Link>
              <Popdown
                className="screen-options"
                label="Screen options"
                options={[
                  { name: 'plain', label: 'Plain site', checked: screenOptions.plain },
                  { name: 'mask', label: 'Screen mask', checked: screenOptions.mask },
                  { name: 'motion', label: 'Motion', checked: screenOptions.motion },
                ]}
                onChange={(option, value) => setScreenOption(option, value)}
              />
            </nav>
          </div>
          <div>
            <nav className="socials">
              <a className="social" target="_blank" rel="noreferrer" href={page.facebook}>
                FB
              </a>
              <a className="social" target="_blank" rel="noreferrer"  href={page.instagram}>
                IG
              </a>
              <a className="social" target="_blank" rel="noreferrer"  href={page.twitter}>
                TW
              </a>
              <Link href="/subscribe" scroll={false}>
                <a
                  aria-controls="subscribe"
                  // aria-expanded={isExpanded ? 'true' : 'false'}
                  aria-haspopup="true"
                >
                  Subscribe
                </a>
              </Link>
              <Link href="/chatbot" scroll={false}>
                <a
                  className="chatbot"
                  aria-label="open chatbot"
                  role="button"
                  aria-controls="chatbot"
                  // aria-expanded={isExpanded ? 'true' : 'false'}
                  aria-haspopup="true"
                >
                  Chatbot
                </a>
              </Link>
            </nav>
          </div>
        </div>
      </Footer>
    </Template>
  )
}
