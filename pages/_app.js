import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
import globalStyles from 'global'

export default function App({ Component, pageProps }) {
  globalStyles()
  return <Component {...pageProps} />
}
