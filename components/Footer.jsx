import { theme, createTheme, styled } from 'stitches.config'
import { useScreenOptionsContext } from 'hooks/useScreenOptions'
import { Landing } from 'templates/Landing'
import { Markdown } from 'components/Markdown'
import { Chatbot } from 'components/Chatbot'
import { useRouter } from 'next/router'
import { Pane } from 'components/Pane'
import { useState } from 'react'
import clsx from 'classnames'
import Link from 'next/link'
import React from 'react'

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
  'div': {
    p: {
      fontSize: '$sans2',
    },
  },
  '.desktop': {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
  },
  '.screen-options': {
    marginTop: '6px',
    'div': {
      a: {
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
    gap: '.5em',
    '@mobile': {
      gap: '.3em',
    },
    a: {
      textDecoration: 'none',
      textTransform: 'uppercase',
      fontSize: '$sans1',
      background: '#f7f7f7',
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
  background: '$bg',
  padding: '$1 0',
  bottom: '0',
  textAlign: 'center',
  borderRadius: '1em',
  boxShadow: '$shadow',
  background: 'white',
  a: {
    '&:hover': {
      color: '$bg',
    },
  },
  button: {
    '&:hover': {
      color: '$bg',
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

function Popdown({ label, options, className, value, onChange, paneTheme, setup }) {
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

  const { isExpanded, setIsExpanded } = useState(false);
  function ariaControls() {
    setIsExpanded((isExpanded) => !isExpanded)
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

export function SiteFooter({ page = {} }) {
  const router = useRouter()
  const { query } = router

  console.log(page.access)

  const showAuslanPane = ['auslan', 'access'].includes(query.slug)
  const showChatbot = query.slug === 'chatbot'
  const {
    screenOptions,
    screenOptions: { motion },
    setScreenOption,
  } = useScreenOptionsContext()

  return (
    <Footer>
      <Pane
        show={showAuslanPane}
        onClose={() => router.replace('/', undefined, { scroll: false })}
      >
        <Markdown>Here’s some text</Markdown>
      </Pane>

      <Chatbot
        onClose={() => router.replace('/', undefined, { scroll: false })}
        show={showChatbot}
      />
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
            <a className="social" target="_blank" rel="noreferrer" href={page.instagram}>
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
  );
};