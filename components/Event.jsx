import { useState } from 'react'
import { styled } from 'stitches.config'

const Event = styled('div', {
  '.event': {
    '&-image': {
      maxWidth: '30%',
      margin: '4em auto',
      '@mobile': {
        maxWidth: '50%',
      },
    }
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

export function EventItem({ title, image, shortDesc, longDesc, eventUrl }) {

  const [isShown, setIsShown] = useState(false)
  const handleClick = (event) => {
    setIsShown((isShown) => !isShown)
  }

  return (
    <Event>
      <article>
        {image && <div className="event-image">
          <img src={image} alt="" />
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
            {shortDesc}{' '}
            <span className="extra-content_trigger" onClick={handleClick}>
              (read more)
            </span>
            {isShown && (
              <div className="extra-content">
                {longDesc}
              </div>
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