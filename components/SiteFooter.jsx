import { theme, createTheme, styled } from 'stitches.config';
import { useScreenOptionsContext } from 'hooks/useScreenOptions';
import { Popdown } from 'components/Popdown';
import { useRouter } from 'next/router';
import { Pane } from 'components/Pane';
import { SubscribeModal } from 'components/SubscribeModal';
import { Chatbot } from 'components/Chatbot';
import { Markdown } from 'components/Markdown';
import Link from 'next/link';

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
    gap: '.3em',
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

export function SiteFooter({ page = {} }) {
  const router = useRouter();
  const { query } = router;
  const showAuslanPane = ['auslan', 'access'].includes(query.slug?.toString())
  const showSubscribeModal = query.slug?.toString() === 'subscribe'
  const showChatbot = query.slug?.toString() === 'chatbot'

  const {
    screenOptions,
    screenOptions: { motion },
    setScreenOption,
  } = useScreenOptionsContext()
  
  return (
    <Footer>

        <SubscribeModal
          show={showSubscribeModal}
          onClose={() => router.replace('/', undefined, { scroll: false })}
        />
        <Pane
          show={showAuslanPane}
          onClose={() => router.replace('/', undefined, { scroll: false })}
        >
        <Chatbot
          onClose={() => router.replace('/', undefined, { scroll: false })}
          show={showChatbot}
        />
        <Markdown>{ page.access }</Markdown>
        </Pane>

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
  )
}