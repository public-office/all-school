import Head from 'next/head'
import { styled } from 'stitches.config'
import ScreenMask from 'components/ScreenMask'
import { useScreenOptionsContext } from 'hooks/useScreenOptions'

const Page = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  position: 'relative',
})

export default function Template({ title, children, ...props }) {
  const {
    screenOptions: { mask },
  } = useScreenOptionsContext()

  return (
    <>
      <Head>
        <title>All School, by Next Wave!</title>
      </Head>
      <ScreenMask active={mask} />
      <Page {...props}>{children}</Page>
    </>
  )
}
