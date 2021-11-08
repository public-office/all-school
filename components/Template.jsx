import Head from 'next/head'
import { useEffect } from 'react'
import { styled } from 'stitches.config'

const Page = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  position: 'relative',
})

const qsa = (selector) => Array.from(document.querySelectorAll(selector))

export default function Template({ title, children, plain, ...props }) {
  useEffect(() => {
    if (plain) {
      qsa('style, link[rel="stylesheet"]').forEach((el) => {
        el.parentNode.removeChild(el)
      })
    }
  }, [])

  return (
    <>
      <Head>
        <title>All School, by Next Wave!</title>
      </Head>
      <Page {...props}>{children}</Page>
    </>
  )
}
