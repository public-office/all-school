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
  media: {
    mobile: '(max-width: 640px)',
    desktop: '(min-width: 640px)',
  },
  theme: defaultTheme,
})
