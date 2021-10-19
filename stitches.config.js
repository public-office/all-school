import { createStitches } from '@stitches/react'
import defaultTheme from './theme'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: defaultTheme,
})
