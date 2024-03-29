import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
import { globalStyles } from 'global'
import { Layout } from 'components/Layout'
import { ScreenOptionsContext } from 'context/ScreenOptionsContext'
import { useScreenOptions } from 'hooks/useScreenOptions'
import { usePlainStyle } from 'hooks/usePlainStyle'
import { ApolloProvider } from '@apollo/client'
import { client } from 'lib/strapi'
import { Analytics } from '@vercel/analytics/react';
import '../public/styles.css'

export default function App({ Component, pageProps }) {
  globalStyles()

  const { screenOptions, setScreenOption } = useScreenOptions()
  usePlainStyle(screenOptions.plain)

  return (
    <ApolloProvider client={client}>
      <ScreenOptionsContext.Provider value={{ screenOptions, setScreenOption }}>
        <Layout>
          <Component {...pageProps} />
          <Analytics />
        </Layout>
      </ScreenOptionsContext.Provider>
    </ApolloProvider>
  )
}
