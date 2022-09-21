import { Pane } from 'components/Pane'
import { SubscribeModal } from 'components/SubscribeModal'
import { createTheme, styled } from 'stitches.config'
import FastMarquee from 'react-fast-marquee'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Disc } from 'components/Disc'
import { Chatbot } from 'components/Chatbot'
import { theme } from 'stitches.config'
import { useState } from 'react'
import { useScreenOptionsContext } from 'hooks/useScreenOptions'
import { Template } from 'components/Template'
import { Markdown } from 'components/Markdown'

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
  padding: '2.75em $margin 1em',
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
    },
  },
})

const Sticky = styled('div', {
  width: '18rem',
  right: '$margin2',
  position: 'fixed',
  right: '1em',
  top: '2em',
  zIndex: 2,
})

const marqueeStyle = {
  fontFamily: '$serif',
  fontSize: '$serif1',
  paddingTop: '$1',
  letterSpacing: '0.025rem',
  textTransform: 'uppercase',
  zIndex: '100',
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

const HeroText = styled('div', {
  fontSize: '$sans4',
  lineHeight: '$sans4',
  height: 'calc(110vh - var(--space-margin))',
  position: 'relative',
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
    marginTop: '-1.5em',
    '@mobile': {
      // gridTemplateColumns: '1fr',
      // gridAutoRows: 'calc(25vh + 4px)',
    },
  },
  '.menu': {
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
  },
  '.head': {
    position: 'sticky',
    top: '.15em',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    '.nav-trigger': {
      paddingLeft: '.5rem',
      '&:hover': {
        cursor: 'pointer',
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
  div: {
    '&.color-block': {
      background: '$purple',
    },
    '&.image-one': {
      backgroundImage: 'url("../images/as_bluesky.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'top left',
    },
    '&.image-two': {
      backgroundImage: 'url("../images/as_classes.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'top left',
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
  zIndex: 2,
  '.extra-content': {
    margin: '1em 8em',
    fontSize: '$sans2',
    letterSpacing: '0',
    lineHeight: '$sans2',
    '&_trigger': {
      '&:hover': {
        cursor: 'pointer',
        color: '$purple',
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
      fontSize: '$sans3',
      lineHeight: '$sans3',
    },
  },
  '& .padded': {
    paddingTop: '1.1em',
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
  '.desktop': {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
  },
  '.screen-options': {
    marginTop: '6px',
  },
  nav: {
    display: 'flex',
    gap: '.6em',
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
    '.auslan, .access, .chatbot': {
      display: 'none',
    },
    nav: {
      display: 'flex',
      flexWrap: 'wrap',
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
  background: '$bg',
  padding: '$1 3rem',
  textAlign: 'center',
  borderRadius: '1em',
  boxShadow: '$shadow',
  button: {
    '&:hover': {
      color: '$highlight',
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

function Popdown({ label, options, className, value, onChange }) {
  const [open, setOpen] = useState(false)

  const handleClick = (e) => {
    e.preventDefault()
    setOpen(!open)
  }

  const handleClickOption = (e, option) => {
    e.preventDefault()
    onChange(option.name, !option.checked)
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
                className={classnames({ selected: option.checked })}
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

  const showAuslanPane = ['auslan', 'access'].includes(query.slug)
  const showSubscribeModal = query.slug === 'subscribe'
  const showChatbot = query.slug === 'chatbot'

  const [isShown, setIsShown] = useState(false)
  const handleClick = (event) => {
    setIsShown((isShown) => !isShown)
  }
  const [isVisible, setIsVisible] = useState(false)
  const menuState = (event) => {
    setIsVisible((isVisible) => !isVisible)
  }

  const [isExpanded, setisExpanded] = useState(false)
  const [buttonText, setbuttonText] = useState('Menu')

  const {
    screenOptions,
    screenOptions: { motion, plain },
    setScreenOption,
  } = useScreenOptionsContext()

  const marqueeText = page.marquee

  return (
    <Template>
      {motion ? (
        <Marquee gradient={false}>
          The Next Wave office is located on the land of the Wurundjeri people of the
          Kulin nation. We pay our respects to Elders past and present, as well as to all
          Aboriginal and Torres Strait Islander people in the wider Melbourne community
          and beyond.
        </Marquee>
      ) : (
        <StaticMarquee>
          The Next Wave office is located on the land of the Wurundjeri people of the
          Kulin nation. We pay our respects to Elders past and present, as well as to all
          Aboriginal and Torres Strait Islander people in the wider Melbourne community
          and beyond.{' '}
        </StaticMarquee>
      )}

      <SubscribeModal
        show={showSubscribeModal}
        onClose={() => router.replace('/', undefined, { scroll: false })}
      />

      <HeroText>
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
          <div className="menu">
            <span
              className="nav-trigger"
              onClick={function (event) {
                menuState()
                setbuttonText('Close x')
              }}
            >
              {buttonText}
            </span>
            {isVisible && (
              <nav>
                <a href="#about">About</a>
                <a href="#lab">LAB</a>
              </nav>
            )}
          </div>
        </div>
        <div className="intro">
          <div></div>
          <div className="color-block"></div>
          <div className="image-one"></div>
          <div className="image-two"></div>
        </div>
      </HeroText>

      <Main>
        <p id="about">
          All School is a platform by <a href="https://nextwave.org.au">Next Wave</a>{' '}
          exploring new artist-led learning experiences; hosting a mix of content
          including talks, livestreams, videos, downloadable resources.
        </p>
        <Networked>
          <img src="/images/networked.svg" alt="" />
        </Networked>
        <p id="lab">
          <span className="purple">L</span>
          <span className="orange">A</span>
          <span className="green">B</span>
          <span className="purple">,</span> <span className="orange">2</span>
          <span className="green">8</span>
          <span className="purple">–</span>
          <span className="orange">2</span>
          <span className="green">9</span> <span className="purple">O</span>
          <span className="orange">c</span>
          <span className="green">t</span>
          <span className="purple">.</span>
          <br />
          is a two-day event Am derum re aut dolorios es dit iur aut que perisciatiis et
          estiquam voluptur.{' '}
          <span className="extra-content_trigger" onClick={handleClick}>
            (read more)
          </span>
          {isShown && (
            <div className="extra-content">
              Community networks are IP-based computer networks that are operated by a
              community as a common good. In Europe, the most well-known community
              networks are Guifi in Catalonia, Freifunk in Berlin, Ninux in Italy,
              Funkfeuer in Vienna and the Athens Wireless Metropolitan Network in Greece.
              This paper deals with community networks as alternative forms of Internet
              access and alternative infrastructures.
            </div>
          )}
        </p>
        <p className="padded">
          Get tickets&nbsp;
          <Link href="/subscribe" scroll={false}>
            here
          </Link>
          .
        </p>

        <Subscribe>
          <p
            className="button"
            aria-label="open subscribe"
            role="button"
            aria-controls="subscribe"
            aria-expanded="false"
            aria-haspopup="true"
          >
            <Link href="/subscribe" scroll={false}>
              Subscribe
            </Link>
          </p>
        </Subscribe>
      </Main>

      <Sticky>
        <Disc />
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
              <a className="social" href="#">
                FB
              </a>
              <a className="social" href="#">
                IG
              </a>
              <a className="social" href="#">
                TW
              </a>
              <Link href="/chatbot" scroll={false}>
                <a
                  className="chatbot"
                  aria-label="open chatbot"
                  role="button"
                  aria-controls="chatbot"
                  aria-expanded="false"
                  aria-haspopup="true"
                  onClick={() => setExpanded(!true)}
                  aria-expanded={true}
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
