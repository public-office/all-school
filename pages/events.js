import React from 'react'
import { Pane } from 'components/Pane'
import { styled } from 'stitches.config'
import { SiteHeader } from 'components/Header'
import { Template } from 'components/Template'
import { SiteFooter } from 'components/Footer'
import { Chatbot } from 'components/Chatbot'
import { useRouter } from 'next/router'
import { Markdown } from 'components/Markdown'
import { useScreenOptionsContext } from 'hooks/useScreenOptions'
import { SubscribeModal } from 'components/SubscribeModal'
import FastMarquee from 'react-fast-marquee'
import { EventsList } from 'components/EventsList'

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

export default function Events({ page = {} }) {

  const router = useRouter()
  const { query } = router

  const showAuslanPane = ['auslan', 'access'].includes(query.slug)
  const showSubscribeModal = query.slug === 'subscribe'
  const showChatbot = query.slug === 'chatbot'

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

      <SubscribeModal
        show={showSubscribeModal}
        onClose={() => router.replace('/', undefined, { scroll: false })}
      />
      <SiteHeader />

      <Main>
        <EventsList events={page.events} />
      </Main>
      
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

      <SiteFooter />
    </Template>
  );
};