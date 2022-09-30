import { useState } from 'react';

export function EventItem({ title, image, shortDesc, longDesc, eventUrl }) {

  const [isShown, setIsShown] = useState(false)
  const handleClick = (event) => {
    setIsShown((isShown) => !isShown)
  }

  return (
    <article>
      {image && <div>
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
          <a href={eventUrl} target="_blank" rel="noreferrer">
            here
          </a>
          .
        </p>
      </div>
    </article>
  )
}