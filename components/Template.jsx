import Head from 'next/head'
import { styled } from 'stitches.config'
import { ScreenMask } from 'components/ScreenMask'
import { useScreenOptionsContext } from 'hooks/useScreenOptions'

const Page = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  position: 'relative',
})

export function Template({ title, children, ...props }) {
  const {
    screenOptions: { mask, plain },
    setScreenOption,
  } = useScreenOptionsContext()

  const handleClickDefaultLayout = (e) => {
    e.preventDefault()
    setScreenOption('plain', false)
  }

  return (
    <>
      <Head>
        <title>All School, by Next Wave!</title>
      </Head>
      {plain && (
        <button
          style={{ position: 'fixed', top: 8, right: 8 }}
          onClick={handleClickDefaultLayout}
        >
          Back to default layout
        </button>
      )}
      <ScreenMask active={mask} />
      <Page {...props}>{children}</Page>
    </>
  )
}