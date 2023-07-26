import { styled } from 'stitches.config'
import ProgressiveImg from './ProgressiveImg'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Markdown } from 'components/Markdown'

const Essay = styled('div', {
  width: '100%',
  marginTop: '0',
  background: '$lightgrey',
  borderRadius: '.5em',
  overflow: 'hidden',
  '@mobile': {
    marginBottom: '1.5em',
    borderRadius: '1em',
  },
  
  '&:hover': {
    background: '$yellow',
  },
  '&:nth-of-type(odd)': {
    background: '$yellow',
    '&:hover': {
      background: '$lightgrey',
    },
  },

  button: {
    color: 'black',
    textAlign: 'left',
    textDecoration: 'none',
    padding: '.5em' ,
    letterSpacing: '-0.02em',
    lineHeight: '1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    fontSize: '$sans4',
    minHeight: '50vh',
    '@mobile': {
      padding: '.75em .75em 1em',
      lineHeight: '1.15',
    },
    span: {
      display: 'block',
      fontSize: '$sans2',
      lineHeight: '$sans2',
      letterSpacing: '-0.01em',
      textAlign: 'center',
      width: '100%',
      '@mobile': {
        fontSize: '$sans4',
      },
    },
  },
  '.essays': {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridColumnGap: '1em',
  },
  '.essay-single': {
    
    '@mobile': {
      gridTemplateColumns: '1fr',
    },
    '&:hover': {
      cursor: 'pointer',
      '.event-image': {
        
        img: {
          filter: 'grayscale(1)',
          mixBlendMode: 'multiply',
        },
      },
      '& p': {
        background: '$yellow',
      },
    },
    p: {
      fontSize: '$sans5',
      lineHeight: '$sans5',
      margin: '0 !important',
      letterSpacing: '-0.02em',
      padding: '0',
      button: {
        letterSpacing: '-0.02em',
        width: '100%',
      },
      '@mobile': {
        fontSize: '$sans2',
        letterSpacing: '-0.02rem',
      },
    },
  },
  '.essay': {
    background: 'white',
    position: 'fixed',
    top: '2em',
    right: '0',
    width: '100%',
    height: 'calc(100vh - 2em)',
    padding: '1em',
    overflowY: 'auto',
    boxShadow: '5px 5px 15px 5px rgba(0, 0, 0, 0.25)',
    zIndex: '30',
    transition: 'all .5s ease-in-out',
    '@mobile': {
      width: '100%',
    },
    '&_close': {
      position: 'absolute',
      top: '1em',
      right: '1em',
      zIndex: '50',
      '&:hover': {
        cursor: 'pointer',
        color: '#d9c1fa',
      },
    },
    h2: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      paddingBottom: '1em',
      position: 'relative',
      '@mobile': {
        display: 'none',
      },
    },
    iframe: {
      width: '100%',
      height: '100vh',
      top: '-60px',
      position: 'relative',
      zIndex: '40',
    },
    '&:not(.visible)': {
      transform: 'translateX(110%)',
    },
  },
})

export function EssayItem({ id, title, url, author, notes, pdf, text, intro, tagline, image, iframe, slug }) {
  
  const router = useRouter();
  const isVisible = router.query.slug === slug
  return (
    <Link href={`/essays/${slug}`} scroll={false}>
      <Essay>
        <button>
          {title} <span>An essay by {author}</span>
        </button>
          
        <div className={'essay' + (isVisible ? ' visible' : '')}>
          <h2>
            <span>{author}</span>
            <span>{title}</span>
          </h2>{' '}
          <span className="essay_close" onClick={() => router.replace('/')}>
            (close)
          </span>
          <div className="intro"><Markdown>{intro}</Markdown></div>
          <iframe src={url}></iframe>
        </div>
      </Essay>
    </Link>
  )
}
