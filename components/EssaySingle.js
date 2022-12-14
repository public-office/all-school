import { styled } from 'stitches.config'
import { useState } from 'react'
import { useRouter } from 'next/router'
import ProgressiveImg from 'components/ProgressiveImg'
import { useEffect } from 'react';

const Essay = styled('div', {
  button: {
    textAlign: 'left',
    textDecoration: 'none',
    span: {
      display: 'block',
      fontSize: '$sans2',
      lineHeight: '$sans2',
      marginTop: '1em',
    },
  },
  '.essays': {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
  },
  '.essay-single': {
    width: '100%',
    marginTop: '0',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    borderRadius: '1em',
    overflow: 'hidden',
    '@mobile': {
      gridTemplateColumns: '1fr',
    },
    '&:hover': {
      cursor: 'pointer',
      '.event-image': {
        background: '$purple',
        img: {
          filter: 'grayscale(1)',
          mixBlendMode: 'multiply',
        }
      },
      '& p': {
        background: '$purple',
      },
    },
    p: {
      fontSize: '$sans4',
      lineHeight: '$sans4',
      margin: '0 !important',
      letterSpacing: '0',
      padding: '.5em',
      '@mobile': {
        fontSize: '$sans2',
        letterSpacing: '-0.02rem',
        padding: '.5em 0',
      },
      // background: '$orange',
    },
  },
  '.essay': {
    background: 'white',
    position: 'fixed',
    top: '0',
    right: '0',
    width: '80%',
    height: '100%',
    padding: '1em',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '5px 5px 15px 5px rgba(0, 0, 0, 0.25)',
    zIndex: '300',
    transition: 'transform .5s ease-in-out',
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
      height: '100%',
      position: 'relative',
      zIndex: '40',
    },
    '&:not(.visible)': {
      transform: 'translateX(110%)',
    },
  },
})

export function EssaySingle({ title, url, author, pdf, text, tagline, image, onClose, show }) {
  return show ? (
    <Essay className='essays'>
      <div className="essay-single">
        {image && <div className="event-image">
          <ProgressiveImg
            key={image.url}
            src={image.url}
            placeholderSrc={image.url}
            alt={image.alternativeText}
          />
        </div>}
        <p style={{ marginTop: '1em' }}><button>{title}. <span>{tagline}</span></button></p>
      </div>
      <div className="essay visible">
        <h2><span>{title}</span><span>{tagline}</span></h2> <span className="essay_close" onClick={onClose}>(close)</span>
        <iframe src={url}></iframe>
      </div>
    </Essay>
  ) : null
}