import React from 'react'
import { Pane } from 'components/Pane'
import { SubscribeModal } from 'components/SubscribeModal'
import { theme, createTheme, styled } from 'stitches.config'
import FastMarquee from 'react-fast-marquee'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Chatbot } from 'components/Chatbot'
import { useState } from 'react'
import { useScreenOptionsContext } from 'hooks/useScreenOptions'
import { Template } from 'components/Template'
import { Markdown } from 'components/Markdown'
import { Nav } from 'components/Nav'
import { Logos } from 'components/Logos'
import { SiteHeader } from 'components/Header'
import { Tickets } from 'components/Tickets'
import { EssayList } from 'components/EssayList'
import { VideoList } from 'components/VideoList'
import { ResourceList } from 'components/ResourceList'
import { FloatingNav } from 'components/FloatingNav'
import { VideoHead } from 'components/VideoHead'
import clsx from 'classnames'
import { EssaySingle } from 'components/EssaySingle'

const Page = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  position: 'relative',
})

const Subscribe = styled('div', {
  fontSize: '$sans5',
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
  padding: '2em $margin 1em',
  p: {
    letterSpacing: '-2px',
  },
  '& .button': {
    color: 'black',
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

const marqueeStyle = {
  fontFamily: '$serif',
  fontSize: '$serif1',
  paddingTop: '$1',
  letterSpacing: '0.025rem',
  textTransform: 'uppercase',
  zIndex: '100',
  '@mobile': {
    fontSize: '$serif2',
    paddingTop: '2rem',
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

const Main = styled('div', {
  width: '100vw',
  minHeight: '50vh',
  position: 'relative',
  whiteSpace: 'nowrap',
  padding: '.25em $margin $margin',
  zIndex: 20,
  a: {
    color: 'black',
  },
  '@mobile': {
    marginTop: '-6em',
    minHeight: '20vh',
  },
  '.extra-content': {
    margin: '1.5em 8em',
    fontSize: '$sans2',
    letterSpacing: '0',
    lineHeight: '$sans2',
    display: 'block',
    p: {
      fontSize: '$sans2',
      letterSpacing: '0',
      lineHeight: '$sans2',
    },
    '@mobile': {
      margin: '1em .5em 1em 4em',
      fontSize: '$sans1',
      letterSpacing: '0',
      lineHeight: '$sans1',
    },
    '&_trigger': {
      color: 'black',
      '&:hover': {
        cursor: 'pointer',
      },
    },
  },
  p: {
    letterSpacing: '-2px',
    fontSize: '$sans5',
    lineHeight: 1,
    margin: '0',
    maxWidth: '100%',
    whiteSpace: 'pre-wrap',
    overflowWrap: 'break-word',
    '@mobile': {
      fontSize: '$sans5',
      lineHeight: '$sans5',
      letterSpacing: '-0.02em',
    },
    a: {
      textDecoration: 'underline',
      textDecorationThickness: '0.3rem',
      textUnderlineOffset: '0.5rem',
      '@mobile': {
        textDecorationThickness: '0.15rem',
        textUnderlineOffset: '0.2rem',
      },
    },
  },
  '.about': {
    
    p: {
      a: {
        textDecoration: 'underline',
        textDecorationThickness: '0.3rem',
        textUnderlineOffset: '0.5rem',
        '@mobile': {
          textDecorationThickness: '0.15rem',
          textUnderlineOffset: '0.2rem',
        },
      },
    },
  },
  '#about': {
    paddingTop: '3em',
    '@mobile': {
      padding: '1.5em',
      paddingTop: '7em',
    },
  },
  '& .padded': {
    paddingTop: '1.1em',
    button: {
      textDecoration: 'underline',
      textDecorationThickness: '0.3rem',
      textUnderlineOffset: '0.5rem',
      color: 'black',
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
      textDecorationThickness: '0.25rem',
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
  div: {
    p: {
      fontSize: '$sans2',
      '@mobile': {
        fontSize: '$sans5',
      },
    },
  },
  '.desktop': {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    '@mobile': {
      gridTemplateColumns: '1fr',
      padding: '1em',
    },
    div: {
      '&:first-of-type': {
        '@mobile':{
          display: 'none',
        },
      },
      '&:last-of-type': {
        '@mobile': {
          width: '100%',
        },
      },
    },
  },
  '.screen-options': {
    marginTop: '2px',
    div: {
      background: 'white',
      padding: '0',
      paddingBottom: '1em',
      borderRadius: '1em',
      div: {
        padding: '0',
        button: {
          color: 'black',
          '&:hover': {
            color: 'var(--colors-purple)',
          },
        },
      },
      a: {
        background: 'white',
        '&:hover': {
          color: 'var(--colors-purple)',
        },
      },
    },
    '@mobile': {
      display: 'none',
    },
  },
  nav: {
    display: 'flex',
    gap: '.6em',
    '@mobile': {
      gap: '.6em',
    },
    a: {
      textDecoration: 'none',
      fontSize: '$sans1',
      background: '#f7f7f7',
      padding: '6px 16px',
      letterSpacing: '-0.01em',
      borderRadius: '1em',
      '@mobile': {
        fontSize: '$sans4',
      },
    },
    '&.socials a:last-child': {
      marginLeft: 'auto',
    },
    '&.socials': {
      '@mobile': {
        width: '100%',
      },
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
  background: '$yellow',
  padding: '$1 3rem',
  textAlign: 'center',
  borderRadius: '1em',
  boxShadow: '$shadow',
  button: {
    color: 'black',
    '&:hover': {
      color: '$yellow',
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
    bg: '$yellow',
    highlight: '$yellow',
  },
})

const Program = styled('div', {
  position: 'relative',
  marginTop: '-5em',
  '@mobile': {
    marginTop: '0',
  },
  section: {
    padding: '1.5em',
  },
  h2: {
    fontSize: '$sans5',
    textAlign: 'center',
    padding: '1.5em 0 0',
    position: 'relative',
  },
  '.extra-content': {
    margin: '1.5em 8em',
    fontSize: '$sans2',
    letterSpacing: '0',
    lineHeight: '$sans2',
    display: 'block',
    p: {
      fontSize: '$sans2',
      letterSpacing: '0',
      lineHeight: '$sans2',
    },
    '@mobile': {
      margin: '1em .5em 1em 4em',
      fontSize: '$sans1',
      letterSpacing: '0',
      lineHeight: '$sans1',
    },
    '&_trigger': {
      color: 'black',
      '&:hover': {
        cursor: 'pointer',
      },
    },
  },
  p: {
    letterSpacing: '-2px',
    fontSize: '$sans5',
    lineHeight: '$sans5',
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
    },
  },
  '& .padded': {
    paddingTop: '1.1em',
    button: {
      color: 'black',
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
      textDecorationThickness: '0.25rem',
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

  const showAuslanPane = ['auslan', 'access'].includes(query.slug?.toString())
  const showSubscribeModal = query.slug?.toString() === 'subscribe'
  const showChatbot = query.slug?.toString() === 'chatbot'

  const {
    screenOptions,
    screenOptions: { motion },
    setScreenOption,
  } = useScreenOptionsContext()

  return (
    <Template data-theme="rgb(255,255,0)">
      {motion ? (
        <Marquee gradient={false}>{page.marquee}</Marquee>
      ) : (
        <StaticMarquee>{page.marquee}</StaticMarquee>
      )}

      <SubscribeModal
        show={showSubscribeModal}
        onClose={() => router.replace('/', undefined, { scroll: false })}
      />

      <FloatingNav />
      <SiteHeader />
      <VideoHead />
    
      <Main>
        <div id="about">
          <Markdown>{page.information}</Markdown>
        </div>
      </Main>

      <Tickets />

      <Program>
        <VideoList videos={page.videos} />
        <EssayList essays={page.essays} />
        {page.resources != " " &&
          <ResourceList resources={page.resources} />
        }
        

        {page.image && <div className="event-image">
          <ProgressiveImg
            key={page.image.url}
            src={page.image.url}
            placeholderSrc={page.image.url}
            alt={page.image.alternativeText}
          />
        </div>}

        <Logos
          nextWaveLogos={page.nextWaveLogos}
          allSchoolLogos={page.allSchoolLogos}
        ></Logos>
      </Program>

      <Pane
        show={showAuslanPane}
        onClose={() => router.replace('/', undefined, { scroll: false })}
      >
        <Markdown>{page.access}</Markdown>
      </Pane>

      {page.essays.map((essay) => (
        <EssaySingle
          show={router.asPath === `/essays/${essay.id}`}
          key={essay.id}
          id={essay.id}
          title={essay.essayTitle}
          url={essay.essayURL}
          image={essay.mainImage}
          author={essay.essayAuthor}
          intro={essay.intro}
          tagline={essay.essayTagline}
          pdf={essay.essayPDF}
          text={essay.essayText}
          onClose={() => router.replace('/', undefined, { scroll: false })}
        />
      ))}

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
              <a
                className="social"
                target="_blank"
                rel="noreferrer"
                href={page.instagram}
              >
                IG
              </a>
              <a className="social" target="_blank" rel="noreferrer" href={page.twitter}>
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
