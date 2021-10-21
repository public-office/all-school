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

const Page = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  position: 'relative',
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
  padding: '0 $margin $margin',
  zIndex: 2,
  position: 'relative',
  '& p:not(:last-child)': {
    marginBottom: '0.5em',
  },
})

const HeroImage = styled('figure', {
  position: 'absolute',
  bottom: '4.4rem',
  right: '$margin',
  left: 'calc(50% + $margin / 2)',
  overflow: 'hidden',
  borderRadius: '3rem',
})

const Footer = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'flex-end',
  padding: '$margin3 $margin $1',
  marginTop: 'auto',
  columnGap: '$gutter',
  a: {
    textTransform: 'uppercase',
    textDecoration: 'none',
  },
  nav: {
    display: 'flex',
    gap: '1.2em',
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
          including talks, livestreams, videos and downloable resources.
        </p>

        <p>
          <Link href="/subscribe" scroll={false}>
            Subscribe here
          </Link>
          .
        </p>
      </Hero>

      <Disc />

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

      <HeroImage>
        <img src="/images/A_24_L_26_1.jpeg" alt="" />
      </HeroImage>

      <Chatbot
        onClose={() => router.replace('/', undefined, { scroll: false })}
        show={showChatbot}
      />

      <Footer>
        <div>
          <figcaption>
            Vivamus quis tincidunt dolor, ac tincidunt ipsum. Quisque ornare varius sem.
            Suspendisse hendrerit sapien risus, nec tempus massa aliquet at. Integer non
            hendrerit justo. Morbi feugiat ac orci ut tincidunt. Maecenas ac volutpat
            dolor, pharetra vulputate justo. Mauris venenatis ipsum quam.
          </figcaption>
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
