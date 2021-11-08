import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
import globalStyles from 'global'
import Layout from 'components/Layout'
import ScreenOptionsContext from 'context/ScreenOptionsContext'
import { useScreenOption } from 'hooks/useScreenOption'
import { usePlainStyle } from 'hooks/usePlainStyle'

export default function App({ Component, pageProps }) {
  globalStyles()

  const { screenOption, setScreenOption, plain } = useScreenOption()
  usePlainStyle(plain)

  return (
    <ScreenOptionsContext.Provider value={{ screenOption, setScreenOption, plain }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ScreenOptionsContext.Provider>
  )
}
