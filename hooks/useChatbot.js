import axios from 'axios'
import { useCallback, useState, useRef } from 'react'

const BOTPRESS_BASE_URL = 'https://botpress.nextwave.org.au'

const userId = parseInt(Math.random() * 10000000000).toString(32)

const botpress = axios.create({
  baseURL: `${BOTPRESS_BASE_URL}/api/v1/bots/bot/converse/${userId}`,
})

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export const useChatbot = () => {
  const [messages, setMessages] = useState([])
  const messageId = useRef(0)

  const addMessage = useCallback(
    (from, { text = null, typing = false, initial = false }) => {
      messageId.current++
      const id = messageId.current
      const message = { id, from, text, typing, initial }
      setMessages((messages) => [...messages, message])
    },
    []
  )


  const setTyping = useCallback((typing) => {
    if (typing) {
      addMessage('bot', { typing: true })
    } else {
      setMessages((messages) => messages.filter((m) => !m.typing))
    }
  }, [addMessage])

  const submitMessage = useCallback(async ({ text, initial }) => {
    addMessage('user', { text, initial })

    if (!initial) await delay(500 + Math.random() * 1000)

    setTyping(true)

    try {
      const {
        data: { responses },
      } = await botpress.post('/', { text })

      setTyping(false)

      for (const response of responses.filter((r) => r.type === 'text')) {
        addMessage('bot', { text: response.text })
      }
    } catch (e) {
      setTyping(false)
      addMessage('bot', { text: 'Sorry, I encountered an error...' })
    }
  }, [addMessage, setTyping])

  return { messages, submitMessage }
}
