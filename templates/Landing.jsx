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
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion'
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
  padding: '3.5em $margin 1em',
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
  top: '10vh',
  zIndex: 2,
})

const marqueeStyle = {
  fontFamily: '$serif',
  fontSize: '$serif1',
  paddingTop: '$1',
  textTransform: 'uppercase',
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
  height: '100vh',
  '@mobile': {
    fontSize: '$sans3',
    lineHeight: '$sans3',
    marginBottom: '$margin',
  },
  padding: '0 $margin $margin',
  zIndex: 2,
  position: 'relative',
  p: {
    letterSpacing: '-2px',
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
  padding: '0 $margin $margin',
  p: {
    letterSpacing: '-2px',
    fontSize: '$sans4',
    lineHeight: '$sans4',
    margin: '0',
    maxWidth: '100%',
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
  paddingTop: '4em',
  paddingBottom: '8em',
})

const Footer = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'flex-end',
  width: '100%',
  padding: '$margin3 $margin $1',
  marginTop: 'auto',
  columnGap: '$gutter',
  position: 'fixed',
  zIndex: '20',
  left: '0',
  bottom: '0',
  nav: {
    display: 'flex',
    gap: '1.2em',
    a: {
      textDecoration: 'none',
      textTransform: 'uppercase',
      fontSize: '$sans1',
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
      display: 'none',
    },
    marginTop: 0,
    paddingTop: 0,
    figcaption: {
      gridColumn: 'span 2',
      marginBottom: '$margin',
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

  const {
    screenOptions,
    screenOptions: { motion, plain },
    setScreenOption,
  } = useScreenOptionsContext()

  const marqueeText = page.marquee
  
  return (
    <Template>
      {motion ? (
        <Marquee gradient={false}>{marqueeText}</Marquee>
      ) : (
        <StaticMarquee>{marqueeText}</StaticMarquee>
      )}

      <SubscribeModal
        show={showSubscribeModal}
        onClose={() => router.replace('/', undefined, { scroll: false })}
      />

      <HeroText>
        <Markdown>{page.masthead}</Markdown>
      </HeroText>

      <Sticky>
        <Disc />
      </Sticky>

      <Pane
        show={showAuslanPane}
        onClose={() => router.replace('/', undefined, { scroll: false })}
      >
        <Markdown>{page.access}</Markdown>
      </Pane>

      <HeroImage>
        <img
          src={page.image?.original}
          alt=""
          width={plain ? 1517 / 2 : '100%'}
          height={plain ? 1000 / 2 : 'auto'}
        />
      </HeroImage>

      <Chatbot
        onClose={() => router.replace('/', undefined, { scroll: false })}
        show={showChatbot}
      />

      <Main>
        <Networked>
          <img src="/images/networked.svg" alt="" />
        </Networked>
        <p>
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
          is a two-day event Am derum re aut
          <br />
          dolorios es dit iur aut que perisciatiis et
          <br />
          estiquam voluptur.
          <Accordion allowZeroExpanded>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>(read more)</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat
                  ut occaecat consequat est minim minim esse tempor laborum consequat esse
                  adipisicing eu reprehenderit enim.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </p>
        <p className="padded">
          Get tickets&nbsp;
          <Link href="/subscribe" scroll={false}>
            here
          </Link>
          .
        </p>

        <Subscribe>
          <p className="button">
            <Link href="/subscribe" scroll={false}>
              Subscribe
            </Link>
          </p>
        </Subscribe>
      </Main>

      <Footer>
        {!plain && (
          <div className="mobile">
            <div>
              <nav className="tools">
                <Link href="/access" scroll={false}>
                  <a className="access">Access</a>
                </Link>
                <Link href="/auslan" scroll={false}>
                  <a className="auslan">Auslan</a>
                </Link>
              </nav>
            </div>
            <div>
              <nav className="socials">
                <Link href="/chatbot" scroll={false}>
                  <a className="chatbot">Chatbot</a>
                </Link>
                <a className="social" href="#">
                  FB
                </a>
                <a className="social" href="#">
                  IG
                </a>
                <a className="social" href="#">
                  TW
                </a>
              </nav>
            </div>
          </div>
        )}
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
                <a className="chatbot">Chatbot</a>
              </Link>
            </nav>
          </div>
        </div>
      </Footer>
    </Template>
  )
}
