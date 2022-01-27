import { styled } from '../stitches.config'
import { motion, AnimatePresence } from 'framer-motion'
import { theme, createTheme } from 'stitches.config'
import { Input } from 'components/Forms'
import { useEffect, useRef, useCallback, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { useChatbot } from 'hooks/useChatbot'
import { useScreenOptionsContext } from 'hooks/useScreenOptions'

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

const BaseMessage = motion(
  styled('div', {
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
)

const Message = (props) => (
  <BaseMessage
    {...props}
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1, delay: 0.2 }}
  />
)

const TypingMessageBubbleBase = motion(styled('span'))
const TypingMessageBubble = ({ delay, ...props }) => (
  <TypingMessageBubbleBase
    {...props}
    transition={{ repeat: Infinity, duration: 1, delay }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    &bull;
  </TypingMessageBubbleBase>
)

const TypingMessage = (props) => (
  <Message
    className="bot"
    css={{
      display: 'flex',
      gap: '0.2em',
      '> span': {
        transform: 'scale(1.2)',
      },
    }}
  >
    <TypingMessageBubble key={0} delay={0} />
    <TypingMessageBubble key={1} delay={0.1} />
    <TypingMessageBubble key={2} delay={0.2} />
  </Message>
)

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

export default function Chatbot({ show = true, onClose = () => {} }) {
  const {
    screenOptions: { motion },
  } = useScreenOptionsContext()

  const handleClickClose = (e) => {
    e.preventDefault()
    onClose()
  }

  const { messages, submitMessage } = useChatbot()
  const [newMessage, setNewMessage] = useState('')

  const overflowRef = useRef(null)
  useEffect(() => {
    if (overflowRef.current) {
      const bottom = overflowRef.current.scrollHeight - overflowRef.current.clientHeight
      overflowRef.current.scrollTo({ top: bottom, behavior: motion ? 'smooth' : 'auto' })
    }
  }, [overflowRef, show, messages])

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault()
      submitMessage({ text: newMessage })
      setNewMessage('')
    },
    [newMessage]
  )

  useEffect(() => {
    if (show && !messages.length) submitMessage({ text: 'hello', initial: true })
  }, [show])

  return (
    <>
      <AnimatePresence>
        {show && (
          <Container
            className={modalTheme}
            transition={{ duration: 0.5, type: 'tween', ease: [0.16, 1, 0.3, 1] }}
            initial={motion ? { y: '130%' } : { opacity: 0 }}
            animate={motion ? { y: 0 } : { opacity: 1 }}
            exit={motion ? { y: '130%' } : { opacity: 0 }}
            style={show ? {} : { pointerEvents: 'none' }}
          >
            <Content ref={overflowRef}>
              <Heading>
                <h2 className="title">Chatbot</h2>
                <Close href="#" onClick={handleClickClose}>
                  Close
                </Close>
              </Heading>

              <Messages>
                {messages
                  .filter((m) => !m.initial)
                  .map((message) =>
                    message.typing ? (
                      <TypingMessage key={message.id} className={message.from} />
                    ) : (
                      <Message key={message.id} className={message.from}>
                        <ReactMarkdown>{message.text}</ReactMarkdown>
                      </Message>
                    )
                  )}
              </Messages>

              <Footer>
                <form onSubmit={handleSubmit}>
                  <MessageInput
                    placeholder="Enter message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                  />
                </form>
              </Footer>
            </Content>
          </Container>
        )}
      </AnimatePresence>
    </>
  )
}
