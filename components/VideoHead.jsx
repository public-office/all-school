import { styled } from 'stitches.config';
import { VideoItem } from './Video';
import { BackgroundImage } from 'react-image-and-background-image-fade';
import Image from 'next/image';

const Head = styled('div', {
  position: 'relative',
  height: 'calc(100vh - 100px)',
  '.head-outer': {
    position: 'relative',
    width: '100%',
    height: 'calc(100vh + 50px)',
    top: '-150px',
    zIndex: '0',
    fontSize: '$sans4',
    lineHeight: '$sans4',
    background: 'url(/images/as_2023_3.png)',
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

export function VideoHead({ videos }) {
  return (
    <Head >
      <div className="head-outer">
        <div className="video-head">
        
        </div>
      </div>
    </Head>
  )
}