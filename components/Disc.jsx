import { motion } from 'framer-motion'
import { useScreenOptionsContext } from 'hooks/useScreenOptions'
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
    img: {
      width: '100%',
      height: '100%',
    },
    '@mobile': {
      top: '35rem',
      width: '14rem',
      right: 'calc($margin / 2)',
    },
  })
)

export function Disc() {
  const {
    screenOptions: { motion },
  } = useScreenOptionsContext()

  return (
    <DiscElement
      animate={motion ? { rotate: 360 } : undefined}
      transition={motion ? { ease: 'linear', duration: 10, repeat: Infinity } : undefined}
    >
      <img
        src="/images/disc.svg"
        width="200"
        height="200"
        alt="All School, by Next Wave!"
      />
    </DiscElement>
  )
}
