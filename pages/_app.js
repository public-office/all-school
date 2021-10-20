import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
import globalStyles from 'global'
import Layout from 'components/Layout'

export default function App({ Component, pageProps }) {
  globalStyles()

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
