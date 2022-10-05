import { styled } from 'stitches.config'

const LogoWrapper = styled('div', {
  marginTop: '5em',
  'p': {
    fontSize: '$sans1',
    letterSpacing: '0',
  }
})

export function Logos({nextWaveLogos, allSchoolLogos}) {
  return(
    <LogoWrapper>
      <p>Next Wave is generously supported by:</p>
      <div className="logos">
        {nextWaveLogos.map(logo => (
          <img
            key={logo.url}
            src={logo.url}
            alt=""
          />
        ))}
      </div>
      <p>All School is supported by:</p>
      <div className="logos">
        {allSchoolLogos.map(logo => (
          <img
            key={logo.url}
            src={logo.url}
            alt=""
          />
        ))}
      </div>
    </LogoWrapper>
  );
}