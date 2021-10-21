import { styled } from '../stitches.config'
import { motion, AnimatePresence } from 'framer-motion'
import { theme, createTheme } from 'stitches.config'
import PreventOutsideScroll from 'react-prevent-outside-scroll'
import { Input } from 'components/Forms'
import { useEffect, useRef } from 'react'

const modalTheme = createTheme({
  colors: {
    bg: theme.colors.highlight.value,
    highlight: theme.colors.bg.value,
  },
})

const MODAL_LAYER = 10000

const Container = motion(
  styled('div', {
    background: '$bg',
    color: '$fg',
    position: 'fixed',
    bottom: '$1',
    right: '$margin',
    zIndex: MODAL_LAYER,
    width: '100%',
    maxWidth: '35em',
    display: 'grid',
    borderRadius: '1rem',
    overflow: 'hidden',
    boxShadow: '$shadow',
  })
)

const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  overflowY: 'auto',
  minHeight: `min(30rem, calc(100vh - (${theme.space['1']} * 2)))`,
  maxHeight: `min(40rem, calc(100vh - (${theme.space['1']} * 2)))`,
})

const Heading = styled('header', {
  position: 'sticky',
  top: 0,
  left: 0,
  background: '$bg',
  maskImage: 'linear-gradient(black 70%, transparent)',
  padding: '$gutter',
  paddingBottom: '3.2rem',
  '.title': {
    textAlign: 'center',
    textTransform: 'uppercase',
  },
})

const Close = styled('a', {
  position: 'absolute',
  top: '$gutter',
  right: '$gutter',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'none',
  },
})

const Messages = styled('div', {
  padding: '0 $gutter 8rem',
  display: 'flex',
  flexDirection: 'column',
})

const Message = styled('div', {
  boxShadow: '$shadow',
  borderRadius: '1.5em',
  padding: '1rem 1.6rem',
  width: 'auto',
  maxWidth: '60%',
  marginBottom: '$2',
  '&.bot': {
    marginRight: 'auto',
  },
  '&.user': {
    marginLeft: 'auto',
  },
})

const Footer = styled('footer', {
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  padding: '$gutter',
  background: '$bg',
  boxShadow: '0 0 0.3rem rgba(0, 0, 0, 0.2)',
})

const MessageInput = styled(Input, {
  boxShadow: '$shadow',
  padding: '1rem 1.6rem',
  borderRadius: '2em',
  background: '$bg',
})

const messages = [
  { from: 'bot', text: "Oh, it's you! I was just thinking about you today!" },
  { from: 'user', text: 'You were?' },
  { from: 'bot', text: "Yeah. Sorry if that's a little forward." },
  { from: 'bot', text: "I don't really get out much..." },
  { from: 'user', text: 'Really?' },
  { from: 'bot', text: 'Sad but true' },
]

export default function Chatbot({ show = true, onClose = () => {} }) {
  const handleClickClose = (e) => {
    e.preventDefault()
    onClose()
  }

  const overflowRef = useRef(null)
  useEffect(() => {
    if (overflowRef.current) {
      const bottom = overflowRef.current.scrollHeight - overflowRef.current.clientHeight
      overflowRef.current.scrollTo({ top: bottom, behavior: 'smooth' })
    }
  }, [overflowRef, show])

  return (
    <>
      <AnimatePresence>
        {show && (
          <Container
            className={modalTheme}
            transition={{ duration: 0.5, type: 'tween', ease: [0.16, 1, 0.3, 1] }}
            initial={{ y: '130%' }}
            animate={{ y: 0 }}
            exit={{ y: '130%' }}
          >
            <Content ref={overflowRef}>
              <Heading>
                <h2 className="title">Chatbot</h2>
                <Close href="#" onClick={handleClickClose}>
                  Close
                </Close>
              </Heading>

              <Messages>
                {messages.map((message, idx) => (
                  <Message key={idx} className={message.from}>
                    {message.text}
                  </Message>
                ))}
              </Messages>

              <Footer>
                <MessageInput placeholder="Enter message..." />
              </Footer>
            </Content>
          </Container>
        )}
      </AnimatePresence>
    </>
  )
}
