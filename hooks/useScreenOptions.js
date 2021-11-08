import { useLocalStorage } from 'react-use'

export const useScreenOptions = () => {
  const [screenOptions, setScreenOptions] = useLocalStorage('screenOptions', {
    plain: false,
    mask: false,
  })

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

  return { screenOptions, setScreenOption }
}
