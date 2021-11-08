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
import Template from 'components/Template'
import classnames from 'classnames'
import { useScreenOptionsContext } from 'hooks/useScreenOptions'

const Marquee = styled(FastMarquee, {
  fontFamily: '$serif',
  fontSize: '$serif1',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  paddingTop: '$1',
  textTransform: 'uppercase',
})

const HeroText = styled('div', {
  fontSize: '$sans4',
  lineHeight: '$sans4',
  '@mobile': {
    fontSize: '$sans3',
    lineHeight: '$sans3',
    marginBottom: '$margin',
  },
  padding: '0 $margin $margin',
  zIndex: 2,
  position: 'relative',
  '& p:not(:last-child)': {
    marginBottom: '0.5em',
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

const Footer = styled('footer', {
  padding: '$margin3 $margin $1',
  marginTop: 'auto',
  '> div': {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'flex-end',
    columnGap: '$gutter',
  },
  a: {
    textTransform: 'uppercase',
    textDecoration: 'none',
  },
  nav: {
    display: 'flex',
    columnGap: '1.2em',
  },
  '@desktop': {
    '.mobile': {
      display: 'none',
    },
    'nav.socials a.chatbot': {
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

export default function Landing() {
  const router = useRouter()
  const { query } = router

  const showAuslanPane = ['auslan', 'access'].includes(query.slug)
  const showSubscribeModal = query.slug === 'subscribe'
  const showChatbot = query.slug === 'chatbot'

  const { screenOptions, setScreenOption } = useScreenOptionsContext()

  return (
    <Template>
      <Marquee gradient={false}>
        All School is a platform by NextWave exploring new artist-led learning
        experiences; hosting a mix of content including talks, livestreams, videos and
        downloable resources. Subscribe here.&nbsp;
      </Marquee>

      <SubscribeModal
        show={showSubscribeModal}
        onClose={() => router.replace('/', undefined, { scroll: false })}
      />

      <HeroText>
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
      </HeroText>

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
        </div>
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
