// import { PasswordProtected, usePasswordProtection } from 'components/PasswordProtected'
import { useRouter } from 'next/router'
import { SiteHeader } from 'components/Header'
import { FloatingNav } from 'components/FloatingNav'
import { SiteFooter } from 'components/SiteFooter'
import { styled } from 'stitches.config'

const Subscribe = styled('div', {
  fontSize: '$sans5',
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
  padding: '2em $margin 1em',
  p: {
    letterSpacing: '-2px',
  },
  '& .button': {
    color: 'black',
    a: {
      letterSpacing: '-2px',
      padding: '2px .4em',
      textDecoration: 'none',
      border: '3px solid',
      borderRadius: '2em',
      position: 'sticky',
      top: '1em',
      '@mobile': {
        border: '0.15rem solid',
        letterSpacing: '-1px',
      },
    },
  },
})

export function Layout({ children }) {

  const router = useRouter();
  const { query } = router;
  const currentRoute = router.pathname;

  return (
    <div data-route={ currentRoute }>
      <SiteHeader />
      <FloatingNav />
      <SiteFooter />
      { children }
      
    </div>
  );
}
