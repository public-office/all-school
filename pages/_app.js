import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
import { globalStyles } from 'global'
import { Layout } from 'components/Layout'
import { ScreenOptionsContext } from 'context/ScreenOptionsContext'
import { useScreenOptions } from 'hooks/useScreenOptions'
import { usePlainStyle } from 'hooks/usePlainStyle'

export default function App({ Component, pageProps }) {
  globalStyles()

  const { screenOptions, setScreenOption } = useScreenOptions()
  usePlainStyle(screenOptions.plain)

  return (
    <ScreenOptionsContext.Provider value={{ screenOptions, setScreenOption }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ScreenOptionsContext.Provider>
  )
}
