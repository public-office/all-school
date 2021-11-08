import { useLocalStorage } from 'react-use'
import { useState } from 'react'

export const useScreenOption = () => {
  const [plain, setPlain] = useLocalStorage('plain', false)
  const [screenOption, setScreenOptionState] = useState(plain ? 'Plain site' : null)

  const setScreenOption = (value) => {
    const prevPlain = plain

    if (value === 'Plain site') {
      setPlain(true)
    } else {
      setPlain(false)
    }

    setScreenOptionState(value)

    if (prevPlain || value === 'Plain site') {
      window.location.reload()
    }
  }

  return { screenOption, setScreenOption, plain }
}
