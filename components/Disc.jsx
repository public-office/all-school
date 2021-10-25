import { motion } from 'framer-motion'
import { styled } from 'stitches.config'

const DiscElement = motion(
  styled('div', {
    background: '$highlight',
    borderRadius: '50%',
    width: '18rem',
    position: 'absolute',
    top: '21vh',
    zIndex: 2,
    right: '$margin2',
    '@mobile': {
      top: '35rem',
      width: '14rem',
      right: 'calc($margin / 2)',
    },
  })
)

export default function Disc() {
  return (
    <DiscElement
      animate={{ rotate: 360 }}
      transition={{ ease: 'linear', duration: 10, repeat: Infinity }}
    >
      <img
        src="/images/disc.svg"
        width="100%"
        height="100%"
        alt="All School, by Next Wave!"
      />
    </DiscElement>
  )
}
