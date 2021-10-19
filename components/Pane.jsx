import { styled } from '../stitches.config'
import { motion, AnimatePresence } from 'framer-motion'
import { theme, createTheme } from 'stitches.config'
import PreventOutsideScroll from 'react-prevent-outside-scroll'

const paneTheme = createTheme({
  colors: {
    bg: theme.colors.highlight.value,
    highlight: theme.colors.bg.value,
  },
})

const PANE_LAYER = 10000

const PaneContainer = motion(
  styled('div', {
    background: '$bg',
    position: 'fixed',
    top: 0,
    right: 0,
    height: '100vh',
    zIndex: PANE_LAYER,
    width: '100%',
    maxWidth: '31em',
    display: 'flex',
    flexDirection: 'column',
    borderTopLeftRadius: '1rem',
    borderBottomLeftRadius: '1rem',
    boxShadow: '$shadow',
  })
)

const PaneContent = styled('div', {
  color: '$fg',
  padding: '$gutter',
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100%',
})

const Blanket = styled('div', {
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: PANE_LAYER - 1,
  width: '100%',
  height: '100%',
})

export default function Pane({ children, show = true, onClose = () => {} }) {
  return (
    <>
      {show && children && <Blanket onClick={onClose} />}
      <AnimatePresence>
        {show && children && (
          <PreventOutsideScroll>
            <PaneContainer
              className={paneTheme}
              transition={{ duration: 0.5, type: 'tween', ease: [0.16, 1, 0.3, 1] }}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
            >
              <PaneContent>{children}</PaneContent>
            </PaneContainer>
          </PreventOutsideScroll>
        )}
      </AnimatePresence>
    </>
  )
}
