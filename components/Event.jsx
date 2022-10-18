import { useState } from 'react'
import { styled } from 'stitches.config'
import ProgressiveImg from './ProgressiveImg'
import { Markdown } from 'components/Markdown'
import smartypants from 'smartypants';

const Event = styled('div', {
  '.event': {
    p: {
      display: 'block',
      '& + p': {
        paddingTop: '1em',
      },
    },
    '&-image': {
      maxWidth: '30%',
      minHeight: '20rem',
      margin: '4em auto',
      '@mobile': {
        maxWidth: '50%',
        minHeight: '0',
      },
    },
    '&-title': {
      display: 'block',
      textAlign: 'center',
      maxWidth: '85%',
      margin: '0 auto',
      // marginBottom: '1em',
    },
  },
  '&.event-single': {
    '&:not(:first-of-type)': {
      p: {
        fontSize: '$sans2',
        lineHeight: '$sans2',
        letterSpacing: '-0.06rem',
        marginBlockStart: '0',
        marginBlockEnd: '0',
        '@mobile': {
          fontSize: '$sans1',
        },
        a: {
          textDecoration: 'underline',
          textDecorationThickness: '0.2rem',
          textUnderlineOffset: '0.35rem',
        },
      },
      '.event-image': {
        maxWidth: '100%',
        margin: '0 auto',
        paddingBottom: '1em',
        img: {
          borderRadius: '.5em',
        }
      },
      '.extra-content': {
        display: 'block',
        margin: '1em 2em 1em 4em',
        p: {
          fontSize: '$sans1',
          lineHeight: '$sans1',
          letterSpacing: '-0.04rem',
          '& + p': {
            marginTop: '-.5em',
          },
        },
      },
    },
    '&:first-of-type': {
      '&:after': {
        content: 'Single events',
        display: 'block',
        textAlign: 'center',
        fontSize: '$sans4',
        margin: '2em 0 .5em 0',
        '@mobile': {
          fontSize: '$sans2',
        },
      },
      '.event-title': {
        display: 'none',
      },
    },
    
  },
  img: {
    width: '100%',
    height: '100%',
  },
  '@mobile': {
    top: '6rem',
    // width: '13rem',
    right: '0',
  },
})

export function EventItem({ title, image, shortDesc, longDesc, eventUrl, setup }) {

  const [isShown, setIsShown] = useState(false)
  const handleClick = (event) => {
    setIsShown((isShown) => !isShown)
  }

  return (
    <Event className="event-single">
      <article>
        {image && <div className="event-image">
          <ProgressiveImg 
            key={image.url}
            src={image.url}
            placeholderSrc={image.url}
            alt={image.alternativeText}
          />
        </div>}
        <div className="event">
          <p id="lab">
            <span className="purple">L</span>
            <span className="orange">A</span>
            <span className="green">B</span>
            <span className="purple">,</span> <span className="orange">2</span>
            <span className="green">8</span>
            <span className="purple">–</span>
            <span className="orange">2</span>
            <span className="green">9</span> <span className="purple">O</span>
            <span className="orange">c</span>
            <span className="green">t</span>
            <span className="purple">.</span>
            <br />
            <span className="event-title"><Markdown>{title}</Markdown></span>
            {shortDesc}{' '}
            <span className="extra-content_trigger" onClick={handleClick}>
              (read more)
            </span>
            {isShown && (
              <span className="extra-content" >
                <Markdown>{smartypants(longDesc)}</Markdown>
              </span>
            )}
          </p>
          <p className="padded">
            Get tickets&nbsp;
            <a id="tickets" href={eventUrl} target="_blank" rel="noreferrer">
              here
            </a>
            .
          </p>
        </div>
      </article>
    </Event>
  )
}