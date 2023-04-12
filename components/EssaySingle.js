import { styled } from 'stitches.config'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import ProgressiveImg from 'components/ProgressiveImg'
import { useEffect } from 'react'
import { Markdown } from 'components/Markdown'
import { EssayItem } from 'components/Essay'
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
        maxWidth: '90%',
        overflow: 'hidden',
        margin: '0 auto 2em',
        '@mobile': {
          maxWidth: '100%',
        },
        img: {
          borderRadius: '.5em',
        },
        figcaption: {
          '@mobile': {
            fontSize: '$sans3',
          },
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
        '@mobile': {
          fontSize: '$sans4',
        },
      },
      h2: {
        fontSize: '$sans5',
        lineHeight: '1.05',
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
          paddingTop: '.5em',
          fontSize: '$sans6',
        },
        '.breadcrumb': {
          textAlign: 'left',
          position: 'absolute',
          left: '0',
          paddingTop: '.6em',
          fontSize: '$sans1',
          letterSpacing: '-0.02rem',
          '@mobile': {
            display: 'none',
          },
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
        maxWidth: '100%',
        margin: '0 auto',
        '@mobile': {
          maxWidth: '95%',
        },
        '.notes': {
          maxWidth: 'calc(50% - 1em)',
          p: {
            fontSize: '$sans1',
          },
        },
        p: {
          fontSize: '$sans3',
          lineHeight: '1.2',
          letterSpacing: '-0.02rem',
          '@mobile': {
            fontSize: '$serif3',
          },
          img: {
            maxWidth: '90%',
            borderRadius: '.5em',
            margin: '2em auto 0 auto',
            '& + em': {
              fontStyle: 'normal',
              fontSize: '$serif1',
              display: 'block',
              maxWidth: '90%',
              margin: '.5em auto 5em auto',
            },
          },
          em: {
            fontStyle: 'italic',
          },
        },
        sup: {
          fontSize: '$sans1',
          lineHeight: '1',
          '@mobile': {
            fontSize: '$sans3',
          },
        },
        blockquote: {
          margin: '2em 1em 2em 25%',
          boxShadow: '6px 2px 20px 0px rgba(0, 0, 0, 0.25)',
          padding: '1em',
          borderRadius: '1em',
          '@mobile': {
            margin: '1.2em 1em 3.6em 10%',
            padding: '2em',
          },
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
    '.dingus': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '3em',
    },
    '.intro': {
      p: {
        fontSize: '$sans3 !important',
        lineHeight: '$sans3 !important',
        '@mobile': {
          fontSize: '$serif3 !important',
        },
      },
    },
    '.footnotes': {
      marginTop: '4em',
      maxWidth: '50%',
      marginLeft: '50%',
      '@mobile': {
        marginLeft: '0',
        maxWidth: '100%',
        marginTop: '8em',
      },
      h2: {
        fontSize: '$sans1',
        '@mobile': {
          fontSize: '$sans4 !important',
        },
      },
      p: {
        fontSize: '$sans1 !important',
        '@mobile': {
          fontSize: '$sans4 !important',
        },
      },
      ol: {
        li: {
          '&::marker': {
            fontSize: '$sans1 !important',
            '@mobile': {
              fontSize: '$sans4 !important',
            },
          },
        },
      },
    },
  })

const TextBlock =
  styled('div', {

  })

export function EssaySingle({ id, title, url, logo, author, notes, pdf, text, intro, tags, tagline, image, onClose, show, iframe }) {

  console.log(text)
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

            <span>{author}</span>
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
            <TextBlock>
              {intro !="" &&
                <div>
                    <div className="intro"><Markdown>{intro}</Markdown></div>
                    <div className="dingus">
                      <Image
                        src="/images/networked.svg"
                        alt="me"
                        width="150"
                        height="150"
                      />
                    </div>
                </div>
              }
              <div className="text">
                <Markdown>{text}</Markdown>
                <div className="notes">
                  <Markdown>{notes}</Markdown>
                </div>
              </div>
            </TextBlock>
          }
        </div>
      </Essay>
    </AnimatePresence>
    
  ) : null
}