import { styled } from 'stitches.config'
import { useState, useEffect } from 'react'

const Mask = styled('div', {
  position: 'fixed',
  left: 0,
  width: '100%',
  background: 'rgba(0, 0, 0, 0.75)',
  height: '50%',
  zIndex: 9999999,
  pointerEvents: 'none',
})

const maskSize = '200px'

export default function ScreenMask({ active }) {
  const [y, setY] = useState(0)

  const topHeight = `calc(${y}px - (${maskSize} / 2))`
  const btmHeight = `calc(100% - ${y}px - calc(${maskSize} / 2))`

  useEffect(() => {
    const listener = (event) => {
      setY(event.clientY)
    }

    window.addEventListener('mousemove', listener)

    return () => window.removeEventListener('mousemove', listener)
  })

  return (
    active && (
      <>
        {<Mask aria-hidden style={{ top: 0, height: topHeight }}></Mask>}
        {<Mask aria-hidden style={{ bottom: 0, height: btmHeight }}></Mask>}
      </>
    )
  )
}
