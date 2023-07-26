import { styled } from '../stitches.config'
import { motion, AnimatePresence } from 'framer-motion'
import { theme, createTheme } from 'stitches.config'
import PreventOutsideScroll from 'react-prevent-outside-scroll'
import CloseIcon from '../icons/close.svg'
import { useScreenOptionsContext } from 'hooks/useScreenOptions'

const modalTheme = createTheme({
  colors: {
    bg: theme.colors.highlight.value,
    highlight: theme.colors.bg.value,
  },
})

const MODAL_LAYER = 10000

const ModalBackdrop = motion(
  styled('div', {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: MODAL_LAYER - 1,
    background: 'rgba(240, 240, 240, 0.3)',
    '@desktop': {
      display: 'none',
    },
  })
)

const ModalContainer = motion(
  styled('div', {
    background: '#ccc',
    color: '$fg',
    position: 'fixed',
    top: '$margin',
    right: '$margin',
    zIndex: MODAL_LAYER,
    width: '100%',
    maxWidth: '45em',
    display: 'grid',
    gridTemplateColumns: '1fr 10rem',
    borderRadius: '1rem',
    boxShadow: '$shadow',
    button: {
      '@mobile': {
        width: 'auto !important',
        padding: '.35em 1em .25em'
      },
    },
    '@mobile': {
      display: 'block',
      width: 'auto',
      left: '$margin',
      maxWidth: '100%',
      fontSize: '$sans4',
    },
  })
)

const ModalContent = styled('div', {
  padding: '$gutter',
  display: 'flex',
  flexDirection: 'column',
})

const ModalClose = styled('div', {
  margin: '$gutter',
  '@mobile': {
    display: 'none',
  },
  button: {
    display: 'block',
    width: '100%',
    '&:hover svg path': {
      stroke: '$highlight',
    },
    'svg path': {
      vectorEffect: 'non-scaling-stroke',
    },
  },
})

const transition = { duration: 0.5, type: 'tween', ease: [0.16, 1, 0.3, 1] }

export function Modal({ children, show = true, onClose = () => {}, setup }) {
  const {
    screenOptions: { motion },
  } = useScreenOptionsContext()
  return (
    <>
      <AnimatePresence>
        {show && children && (
          <ModalBackdrop
            onClick={onClose}
            transition={transition}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {show && children && (
          <PreventOutsideScroll>
            <ModalContainer
              className={modalTheme}
              transition={transition}
              initial={motion ? { y: '-130%' } : { opacity: 0 }}
              animate={motion ? { y: 0 } : { opacity: 1 }}
              exit={motion ? { y: '-130%' } : { opacity: 0 }}
            >
              <ModalContent>{children}</ModalContent>
              <ModalClose>
                <button onClick={onClose}>
                  <CloseIcon />
                </button>
              </ModalClose>
            </ModalContainer>
          </PreventOutsideScroll>
        )}
      </AnimatePresence>
    </>
  )
}
