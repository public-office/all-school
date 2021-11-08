import { createContext } from 'react'

export default createContext({
  screenOptions: { mask: false, plain: false },
  setScreenOption: (key, value) => {},
})
