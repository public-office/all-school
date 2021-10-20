import { styled } from '../stitches.config'
import { motion, AnimatePresence } from 'framer-motion'
import { theme, createTheme } from 'stitches.config'
import PreventOutsideScroll from 'react-prevent-outside-scroll'
import CloseIcon from '../icons/close.svg'

const modalTheme = createTheme({
  colors: {
    bg: theme.colors.highlight.value,
    highlight: theme.colors.bg.value,
  },
})

const MODAL_LAYER = 10000

const ModalContainer = motion(
  styled('div', {
    background: '$bg',
    color: '$fg',
    position: 'fixed',
    top: '$margin',
    right: '$margin',
    zIndex: MODAL_LAYER,
    width: '100%',
    maxWidth: '35em',
    display: 'grid',
    gridTemplateColumns: '1fr 10rem',
    borderRadius: '1rem',
    boxShadow: '$shadow',
  })
)

const ModalContent = styled('div', {
  padding: '$gutter',
  display: 'flex',
  flexDirection: 'column',
})

const ModalClose = styled('div', {
  margin: '$gutter',
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

export default function Modal({ children, show = true, onClose = () => {} }) {
  return (
    <>
      <AnimatePresence>
        {show && children && (
          <PreventOutsideScroll>
            <ModalContainer
              className={modalTheme}
              transition={{ duration: 0.5, type: 'tween', ease: [0.16, 1, 0.3, 1] }}
              initial={{ y: '-130%' }}
              animate={{ y: 0 }}
              exit={{ y: '-130%' }}
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
