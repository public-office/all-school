import { useEffect } from 'react'

const qsa = (selector) => Array.from(document.querySelectorAll(selector))

export const usePlainStyle = (plain) => {
  useEffect(() => {
    if (plain) {
      qsa('style, link[rel="stylesheet"]').forEach((el) => {
        el.parentNode.removeChild(el)
      })
    }
  }, [])
}
