import { createContext } from 'react'

export const ScreenOptionsContext = createContext({
  screenOptions: {},
  setScreenOption: (key, value) => {},
})
