import { useLocalStorage } from 'react-use'
import { useContext } from 'react'
import { ScreenOptionsContext } from 'context/ScreenOptionsContext'

export const defaultScreenOptions = { mask: false, plain: false, motion: true }

export const useScreenOptions = () => {
  const [screenOptionsState, setScreenOptions] = useLocalStorage(
    'screenOptions',
    defaultScreenOptions
  )

  const setScreenOption = (name, value) => {
    const prevOptions = { ...screenOptions }

    setScreenOptions({
      ...screenOptions,
      [name]: value,
    })

    if (name === 'plain' && prevOptions.plain !== value) {
      window.location.reload()
    }
  }

  const screenOptions = {
    ...screenOptionsState,
    motion: screenOptionsState.plain ? false : screenOptionsState.motion,
  }

  return { screenOptions, setScreenOption }
}

export const useScreenOptionsContext = () => {
  return useContext(ScreenOptionsContext)
}
