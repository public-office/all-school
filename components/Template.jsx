import Head from 'next/head'
import { styled } from 'stitches.config'
import ScreenMask from 'components/ScreenMask'
import ScreenOptionsContext from 'context/ScreenOptionsContext'
import { useContext } from 'react'

const Page = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  position: 'relative',
})

export default function Template({ title, children, ...props }) {
  const { screenOption } = useContext(ScreenOptionsContext)
  return (
    <>
      <Head>
        <title>All School, by Next Wave!</title>
      </Head>
      {screenOption === 'Screen mask' && <ScreenMask />}
      <Page {...props}>{children}</Page>
    </>
  )
}
