import { styled } from 'stitches.config'

const LogoWrapper = styled('div', {
  marginTop: '5em',
  'p': {
    fontSize: '$sans1',
    letterSpacing: '0',
  }
})

export function Logos() {
  return(
    <LogoWrapper>
      <p>Next Wave is generously supported by:</p>
      (Logos go here)
      <p>All School is supported by:</p>
      (Logos go here)
    </LogoWrapper>
    
  );
}