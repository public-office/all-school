import Head from 'next/head'
import Pane from 'components/Pane'
import SubscribeModal from 'components/SubscribeModal'
import YouTubeEmbed from 'react-lite-youtube-embed'
import { createTheme, styled } from 'stitches.config'
import FastMarquee from 'react-fast-marquee'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Disc from 'components/Disc'
import Chatbot from 'components/Chatbot'
import { theme } from 'stitches.config'
import { useState } from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion'

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
      // bottom: '1.2em',
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

const Marquee = styled(FastMarquee, {
  fontFamily: '$serif',
  fontSize: '$serif1',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  paddingTop: '$1',
  textTransform: 'uppercase',
})

const Hero = styled('div', {
  fontSize: '$sans4',
  lineHeight: '$sans4',
  height: '100vh',
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
  position: 'absolute',
  bottom: '6.25rem',
  right: '$margin',
  left: 'calc(50% + $margin / 2)',
  overflow: 'hidden',
  borderRadius: '3rem',
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
  'button:hover': {
    color: '$highlight',
  },
})

const popdownTheme = createTheme({
  colors: {
    bg: theme.colors.highlight.value,
    highlight: theme.colors.bg.value,
  },
})

function Popdown({ label, options }) {
  const [open, setOpen] = useState(false)

  const handleClick = (e) => {
    e.preventDefault()
    setOpen(!open)
  }
  return (
    <PopdownWrapper>
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
              <button>{option}</button>
            </div>
          ))}
        </PopdownOptions>
      )}
    </PopdownWrapper>
  )
}

export default function Landing() {
  const router = useRouter()
  const { query } = router

  const showAuslanPane = ['auslan', 'access'].includes(query.slug)
  const showSubscribeModal = query.slug === 'subscribe'
  const showChatbot = query.slug === 'chatbot'

  return (
    <Page>
      <Head>
        <title>All School, by Next Wave!</title>
      </Head>

      <Marquee gradient={false}>
        All School is a platform by NextWave exploring new artist-led learning
        experiences; hosting a mix of content including talks, livestreams, videos and
        downloable resources. Subscribe here.&nbsp;
      </Marquee>

      <SubscribeModal
        show={showSubscribeModal}
        onClose={() => router.replace('/', undefined, { scroll: false })}
      />

      <Hero>
        <p>
          <a style={{ textDecoration: 'none' }} href="#">
            All School
          </a>{' '}
          is a platform by{' '}
          <a href="https://nextwave.org.au" target="_blank" rel="noreferrer">
            NextWave
          </a>{' '}
          exploring new artist-led learning experiences; hosting a mix of content
          including talks, livestreams and videos.
        </p>

        <HeroImage>
          <img src="/images/A_24_L_26_1.jpeg" alt="" />
        </HeroImage>
      </Hero>

      <Sticky>
        <Disc />
      </Sticky>

      <Pane
        show={showAuslanPane}
        onClose={() => router.replace('/', undefined, { scroll: false })}
      >
        <figure>
          <YouTubeEmbed id="XyXqOlhtENk" />
          <figcaption>
            How to use the Next Wave website,{' '}
            <a
              href="https://www.youtube.com/watch?v=XyXqOlhtENk"
              target="_blank"
              rel="noreferrer"
            >
              YouTube
            </a>
            .
          </figcaption>
        </figure>
        <p>
          All School is a values-driven organisation and industry leader, advocating for
          cultural inclusion, broad accessibility and best practice in environmental
          sustainability, with deep respect for the traditional custodians of the lands
          and waters that sustain us, Aboriginal and Torres Strait Islander people.
        </p>
        <p>
          For All School updates, follow us on our socials (<a href="#">FB</a>,{' '}
          <a href="#">IG</a> or <a href="#">TW</a>) and/or subscribe to our newsletter{' '}
          <Link href="/subscribe" scroll={false}>
            here
          </Link>
        </p>

        <footer style={{ marginTop: 'auto' }}>
          <p>
            All School
            <br />
            Brunswick Mechanics Institute
            <br />
            270 Sydney Road
            <br />
            Brunswick VIC 3056
          </p>
          <p>hi@allschool.org.au</p>
        </footer>
      </Pane>

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
        <div>
          <nav>
            <Link href="/access" scroll={false}>
              Access
            </Link>
            <Link href="/auslan" scroll={false}>
              Auslan
            </Link>
            <Popdown
              label="Screen options"
              options={[
                'Screen reader',
                'Plain site',
                'No javascript',
                'Remove clutter',
                'Toggle lines',
                'Screen mask',
              ]}
            />
          </nav>
        </div>
        <div>
          <nav className="socials">
            <a href="#">FB</a>
            <a href="#">IG</a>
            <a href="#">TW</a>
            <Link href="/chatbot" scroll={false}>
              Chatbot
            </Link>
          </nav>
        </div>
      </Footer>
    </Page>
  )
}
