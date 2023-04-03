import { styled } from 'stitches.config'
import { useState } from 'react'
import { useRouter } from 'next/router'
import ProgressiveImg from 'components/ProgressiveImg'
import { useEffect } from 'react'
import { Markdown } from 'components/Markdown'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const Essay = 
  styled('div', {
    button: {
      textAlign: 'left',
      textDecoration: 'none',
      span: {
        display: 'block',
        fontSize: '$sans2',
        lineHeight: '$sans2',
        marginTop: '1em',
      },
      '&:hover': {
        color: 'rgb()',
      },
    },
    '.essays': {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
    },
    figcaption: {
      marginTop: '.5em',
      fontFamily: '$sans',
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
        fontSize: '$sans5',
        lineHeight: '$sans5',
        margin: '0 !important',
        letterSpacing: '0',
        padding: '.5em',
        '@mobile': {
          fontSize: '$sans2',
          letterSpacing: '-0.02rem',
          padding: '.5em 0',
        },
      },
    },
    '.essay': {
      background: 'white',
      position: 'fixed',
      top: '0',
      right: '0',
      width: '100%',
      height: '100%',
      padding: '1.5em 3em 1.5em',
      overflowY: 'auto',
      boxShadow: '5px 5px 15px 5px rgba(0, 0, 0, 0.25)',
      zIndex: '300',
      transition: 'transform .5s ease-in-out',
      '&-image': {
        maxWidth: '95%',
        overflow: 'hidden',
        margin: '0 auto 4em',
        img: {
          borderRadius: '1em',
        },
      },
      '@mobile': {
        width: '100%',
      },
      '&_close': {
        position: 'fixed',
        fontSize: '$sans1',
        top: '1em',
        right: '1em',
        zIndex: '50',
        background: '#f7f7f7',
        padding: '.15em .75em',
        borderRadius: '1em',
        '&:hover': {
          cursor: 'pointer',
          color: '$grey',
        },
      },
      h2: {
        fontSize: '$sans5',
        lineHeight: '1.1',
        paddingBottom: '1em',
        textAlign: 'center',
        position: 'relative',
        letterSpacing: '-0.02em',
        span: {
          display: 'block',
          '&:last-of-type': {
            textAlign: 'left',
          },
        },
        '@mobile': {
          display: 'none',
        },
        '.breadcrumb': {
          textAlign: 'left',
          position: 'absolute',
          left: '0',
          paddingTop: '.6em',
          fontSize: '$sans1',
          letterSpacing: '0.02rem',
          a: {
            '&:first-child': {
              '&:before': {
                content: '\\2191',
              },
            },
            '&:not(:first-child):after': {
              content: ', ',
            },
            '&:last-child:after': {
              content: '',
            },

          },
        },
      },
      '.text': {
        maxWidth: '80%',
        margin: '0 auto',
        p: {
          fontSize: '$sans2',
          lineHeight: '1.1',
        },
        blockquote: {
          marginLeft: '40%',
        },
      },
      iframe: {
        width: '100%',
        height: '100vh',
        position: 'relative',
        zIndex: '40',
      },
      '&:not(.visible)': {
        transform: 'translateX(110%)',
      },
    },
  })

export function EssaySingle({ id, title, url, author, pdf, text, tags, tagline, image, onClose, show, iframe }) {

  return show ? (
    <AnimatePresence>
      <Essay>
        <div className="essay visible">
          <h2>
            <span className="breadcrumb">
            <Link href="/commissions">Commissions</Link><br />
              {tags &&
                tags.map((tag) => (
                  <span key={id}>{title}</span>
                ))
              }
            </span>

            <span>{tagline}</span>
            <span>{title}</span>
          </h2>
          <span className="essay_close" onClick={onClose}>close</span>
          {url != null &&
            <iframe src={url}></iframe>
          }
          {image && <div className="essay-image">
            <ProgressiveImg
              key={image.url}
              src={image.url}
              placeholderSrc={image.url}
              caption={image.caption}
              alt={image.alternativeText}
            />
            <figcaption>{image.caption}</figcaption>
          </div>}
          {text != "" &&
            <div className="text"><Markdown>{text}</Markdown></div>
          }
        </div>
      </Essay>
    </AnimatePresence>
    
  ) : null
}