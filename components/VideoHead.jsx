import { styled } from 'stitches.config'
import FastMarquee from 'react-fast-marquee'
import { VideoItem } from './Video'
import { BackgroundImage } from 'react-image-and-background-image-fade'
import Image from 'next/image'

const Head = styled('div', {
  maxHeight: '90vh',
  position: 'relative',
  '.head-outer': {
    position: 'relative',
    width: '100%',
    height: '100vh',
    top: '-150px',
    zIndex: '0',
    fontSize: '$sans4',
    lineHeight: '$sans4',
    background: 'url(/images/header_alt.svg)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    '@mobile': {
      height: '90vh',
      top: '-145px',
      left: '0',
      background: 'url(/images/header_mob.svg)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '60%',
      backgroundSize: '135%',
      svg: {
        zIndex: '100',
      },
    },
  },
  
  'h1': {
    '&:hover': {
      'span': {
        color: 'black',
      },
    },
  },
  '.video-head': {
    position: 'relative',
    height: '100vh',
    '@mobile': {
      height: '75vh',
    },
    '.title': {
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      top: '1.55em',
      width: '68%',
      display: 'none',
      span: {
        display: 'block',
        textAlign: 'center',
        '&:first-of-type': {
          textAlign: 'center',
        },
        '&:nth-of-type(2)': {
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          span: {
            '&:first-of-type': {
              textAlign: 'left',
            },
            '&:last-of-type': {
              textAlign: 'right',
              display: 'block',
            },
          },
        },
      },
    },
  },
  '@mobile': {
    fontSize: '$sans2',
    lineHeight: '$sans2',
    padding: '0',
  },
  '.head': {
    position: 'sticky',
    top: '.15em',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    padding: '0 var(--space-margin) var(--space-1)',
    h1: {
      letterSpacing: '-2px',
      a: {
        TextDecoration: 'none !important',
      },
    },
    '@mobile': {
      top: '.25em',
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

const marqueeStyle = {
  fontFamily: '$sans',
  fontSize: '$sans2',
  padding: '.5em 0',
  letterSpacing: '0.025rem',
  letterSpacing: '-0.025rem',
  zIndex: '100',
  background: 'white',
  color: 'black',
  position: 'relative',
  top: '-5.25em',
  '&:hover': {
    background: '$yellow',
    color: 'black',
  },
  '@mobile': {
    fontSize: '$sans4',
    position: 'absolute',
    top: '-130px',
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

export function VideoHead({ videos }) {
  return (
    <Head >
      <div className="head-outer">
        <div className="video-head">
          <div className="title">
            <span>02</span>
            <span><span>Crit</span><span>Club</span></span>
            <span>19. Apr, 2023</span>
          </div>
        </div>
      </div>
    </Head>
  )
}