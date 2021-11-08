import { useLocalStorage } from 'react-use'
import { useEffect } from 'react'
import { createGlobalState } from 'react-use'

const useGlobalScreenOption = createGlobalState(null)

export const useScreenOption = () => {
  const [plain, setPlain] = useLocalStorage('plain', false)
  const [screenOption, setScreenOptionState] = useGlobalScreenOption()

  useEffect(() => {
    setScreenOptionState(plain ? 'Plain site' : null)
  }, [])

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
