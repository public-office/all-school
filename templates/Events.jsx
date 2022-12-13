import React from 'react'
import { styled } from 'stitches.config'
import { SiteHeader } from 'components/Header'
import { Template } from 'components/Template'
import { SiteFooter } from 'components/Footer'
import { Chatbot } from 'components/Chatbot'
import Link from 'next/link'
import { useRouter } from 'next/router'
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


      <SiteFooter />
    </Template>
  );
};