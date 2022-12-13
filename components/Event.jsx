import { useState, useEffect, useRef } from 'react'
import { styled } from 'stitches.config'
import ProgressiveImg from './ProgressiveImg'
import { Markdown } from 'components/Markdown'
import smartypants from 'smartypants';

const Event = styled('div', {
  '.event': {
    '#lab': {
      '.color': {
        fontSize: '$sans4',
        '@mobile': {
          fontSize: '$sans2',
        },
      },
    },
    '.extra-content': {
      margin: '1em 2.5em',
      '&_trigger': {
        fontSize: '$sans4',
        '@mobile': {
          fontSize: '$sans2',
        },
      },
      p: {
        fontSize: '$sans2',
        lineHeight: '$sans2',
        letterSpacing: '-0.04rem',
        '& + p': {
          paddingTop: '1em',
        },
      },
    },
    p: {
      display: 'block',
      fontSize: '$sans4',
      '@mobile': {
        fontSize: '$sans2',
      },
      '& + p': {
        paddingTop: '1em',
      },
    },
    '&-image': {
      maxWidth: '30%',
      minHeight: '20rem',
      margin: '4em auto',
      '&:hover': {
        'img': {
          filter: 'grayscale(1)',
          mixBlendMode: 'multiply',
        },
      },
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
      '.download': {
        display: 'none',
      },
      p: {
        fontSize: '$sans2',
        lineHeight: '$sans2',
        letterSpacing: '-0.04rem',
        marginBlockStart: '0',
        marginBlockEnd: '0',
        '@mobile': {
          fontSize: '$sans1',
          lineHeight: '$sans1',
        },
        a: {
          textDecoration: 'underline',
          textDecorationThickness: '0.2rem',
          textUnderlineOffset: '0.35rem',
        },
      },
      '#lab': {
        '.color': {
          fontSize: '$sans2',
        },
      },
      '.event-image': {
        maxWidth: '100%',
        margin: '0 auto',
        marginBottom: '1em',
        borderRadius: '.5em',
        img: {
          borderRadius: '.5em',
        }
      },
      '.extra-content': {
        display: 'block',
        margin: '1em 2em 1em 4em',
        '&_trigger': {
          fontSize: '$sans2',
          lineHeight: '$sans2',
          display: 'inline',
          '@mobile': {
            fontSize: '$sans1',
            letterSpacing: '-0.02rem',
          },
        },
        '@mobile': {
          margin: '1em 1em 1em 2em',
        },
        p: {
          fontSize: '$sans1',
          lineHeight: '$sans1',
          letterSpacing: '-0.02rem',
          '@mobile': {
            fontSize: '0.9rem',
          },
          '& + p': {
            // marginTop: '-.5em',
            '@mobile': {
              paddingTop: '0',
            },
          },
        },
      },
    },
    '&:first-of-type': {
      '&:after': {
        content: 'Past events',
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

export function EventItem({ title, image, shortDesc, longDesc, eventUrl, eventPdf, startDate, endDate, startTime, endTime, location, setup }) {

  const [isShown, setIsShown] = useState(false)
  const handleClick = (event) => {
    setIsShown((isShown) => !isShown)
  }

  const ref = useRef(null);
  // useEffect(() => {
  //   const triggers = ref.current.className
    
  //   if (triggers) {
  //     console.log(triggers.length);
  //   }
  // }, []);

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
          <div id="lab">
            <span className="color purple">L</span>
            <span className="color orange">A</span>
            <span className="color green">B</span>
            <span className="color purple">,</span> <span className="color orange">2</span>
            <span className="color green">8</span>
            <span className="color purple">–</span>
            <span className="color orange">2</span>
            <span className="color green">9</span> <span className="color purple">O</span>
            <span className="color orange">c</span>
            <span className="color green">t</span>
            <span className="color purple">.</span>
            <br />
            <span className="event-title"><Markdown>{title}</Markdown></span>
            <Markdown>{shortDesc}</Markdown>
            {/* <span ref={ref} className="extra-content_trigger" onClick={handleClick}>
              (read more)
            </span>
            {isShown && (
              <span className="extra-content" >
                <Markdown>{longDesc}</Markdown>
              </span>
            )} */}
          </div>
          {/* <p className="padded">
            Get tickets&nbsp;
            <a id="tickets" href={eventUrl} target="_blank" rel="noreferrer">
              here
            </a>
            .<br/>
            <span className="download">Download <a href={eventPdf} download={eventPdf} target="_blank" rel="noreferrer">program</a>.</span>
            <span>{location}</span>
          </p> */}
        </div>
      </article>
    </Event>
  )
}