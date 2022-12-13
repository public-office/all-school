import { styled } from 'stitches.config'

const LogoWrapper = styled('div', {
  marginTop: '20em',
  padding: '0 1.5em',
  paddingBottom: '3em',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gridColumnGap: '1em',
  '@mobile': {
    display: 'block',
  },
  'p': {
    fontSize: '$sans1',
    letterSpacing: '0',
  },
  '.logo-wrapper': {
    padding: '0 1.5em',
  },
  '.logos': {
    display: 'flex',
    flexDirection: 'row',
    gridTemplateColumns: 'repeat(5, 1fr)',
    marginLeft: '-1em',
    padding: '1em',
    '@mobile': {
      flexWrap: 'wrap',
      marginLeft: '-1em',
    },
    '& + p': {
    },
    'img': {
      height: '50px',
      paddingRight: '1em',
      '@mobile': {
        height: '30px',
        paddingBottom: '.2em',
      },
    },
  },
})

export function Logos({nextWaveLogos, allSchoolLogos}) {
  return(
    <LogoWrapper className="logo-wrapper">
      <div>
        <p>Next Wave is generously supported by:</p>
        <div className="logos">
          {nextWaveLogos.map(logo => (
            <img
              key={logo.url}
              src={logo.url}
              alt={logo.alternativeText}
            />
          ))}
        </div>
      </div>
      
      <div>
        <p>All School is supported by:</p>
        <div className="logos">
          {allSchoolLogos.map(logo => (
            <img
              key={logo.url}
              src={logo.url}
              alt={logo.alternativeText}
            />
          ))}
        </div>
      </div>
    </LogoWrapper>
  );
}