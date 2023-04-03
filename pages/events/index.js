import { Template } from 'components/Template'
import { SiteHeader } from 'components/Header'
import { Pane } from 'components/Pane'
import { Logos } from 'components/Logos'
import { SubscribeModal } from 'components/SubscribeModal'
import { EssaySingle } from 'components/EssaySingle'
import { EventsList } from 'components/EventsList'
import { Markdown } from 'components/Markdown'
import { Chatbot } from 'components/Chatbot'
import { FloatingNav } from 'components/FloatingNav'
import { useState } from 'react'
import Link from 'next/link'
import { useScreenOptionsContext } from 'hooks/useScreenOptions'
import { useRouter } from 'next/router'
import { theme, createTheme, styled } from 'stitches.config'
import FastMarquee from 'react-fast-marquee'
import { client } from 'lib/strapi'
import { gql } from '@apollo/client'
import get from 'lodash/get'



const Main = styled('div', {
  width: '100vw',
  minHeight: '90vh',
  position: 'relative',
  whiteSpace: 'nowrap',
  padding: '.25em $margin $margin',
  marginTop: '-10em',
  zIndex: 20,
  '@mobile': {
    minHeight: '80vh',
  },
  a: {
    color: 'black',
  },
  '@mobile': {
    marginTop: '-6em',
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

const Program = styled('div', {
  // paddingTop: '2.5em',
  section: {
    padding: '1.5em',
  },
  h2: {
    fontSize: '$sans4',
    textAlign: 'center',
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
    },
  },
  '.desktop': {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
  },
  '.screen-options': {
    marginTop: '6px',
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
  background: '${setup.color}',
  padding: '$1 3rem',
  textAlign: 'center',
  borderRadius: '1em',
  boxShadow: '$shadow',
  button: {
    color: 'black',
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

export default function Events({ page = {} }) {

  const router = useRouter()
  const { query } = router

  const showAuslanPane = ['auslan', 'access'].includes(query.slug)
  const showSubscribeModal = query.slug === 'subscribe'
  const showChatbot = query.slug === 'chatbot'

  console.log(page.essays)

  const {
    screenOptions,
    screenOptions: { motion },
    setScreenOption,
  } = useScreenOptionsContext()

  return (
    <Template>
      {motion ? (
        <Marquee gradient={false}>{page.marquee}</Marquee>
      ) : (
        <StaticMarquee>{page.marquee}</StaticMarquee>
      )}

      <FloatingNav />
      <SiteHeader />

      <Program>
        <h2>Events</h2>
        <EventsList events={page.events} />

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

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      query {
        artists (pagination: {limit: 100}) {
          data {
            id
            attributes {
              firstName
              lastName
              website
              biography
            }
          }
        }
        events (pagination: { limit: 100 }) {
          data {
            id
            attributes {
              title
              eventUrl
              mainImage {
                data {
                  attributes {
                    url
                    alternativeText
                    caption
                  }
                }
              }
              startDate
              endDate
              startTime
              endTime
              eventCost
              location
              eventPdf
              description_short
              description_long
            }
          }
        }
        information {
          data {
            attributes {
              information
              marquee
              access
              instagram
              facebook
              twitter
              nextWaveLogos {
                data {
                  attributes {
                    url
                    alternativeText
                    caption
                  }
                }
              }
              allSchoolLogos {
                data {
                  attributes {
                    url
                    alternativeText
                    caption
                  }
                }
              }
            }
          }
        }
      }
    `,
  })
  const { information, marquee, access, instagram, facebook, twitter, nextWaveLogos, allSchoolLogos } = get(data, 'information.data.attributes')

  const artists = get(data, 'artists.data').map((data) => {
    return {
      id: data.id,
      ...data.attributes,
    }
  })

  const events = get(data, 'events.data').map((data) => {
    return {
      id: data.id,
      ...data.attributes,
      mainImage: get(data, 'attributes.mainImage.data.attributes'),
    }
  })

  return {
    props: {
      page: {
        access,
        events,
        artists,
        marquee,
        information,
        nextWaveLogos: nextWaveLogos.data.map(logo => get(logo, 'attributes')),
        allSchoolLogos: allSchoolLogos.data.map(logo => get(logo, 'attributes')),
        instagram,
        facebook,
        twitter,
      },
    },
  }
}