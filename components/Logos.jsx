import { styled } from 'stitches.config'

const LogoWrapper = styled('div', {
  marginTop: '10em',
  padding: '1em',
  paddingBottom: '5em',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gridColumnGap: '1em',
  background: '#e1e1e1',
  '@mobile': {
    display: 'block',
    padding: '2em',
    paddingBottom: '10em',
  },
  'p': {
    fontSize: '$sans1',
    letterSpacing: '0',
    '@mobile': {
      fontSize: '$sans4',
      paddingBottom: '.5em',
    },
  },
  '.logo-wrapper': {
    padding: '0 1.5em',
    
    p: {
      fontSize: '$sans2 !important',
    },
  },
  '.logos': {
    display: 'flex',
    flexDirection: 'row',
    gridTemplateColumns: 'repeat(5, 1fr)',
    marginLeft: '-1em',
    padding: '.75em 1em',
    '@mobile': {
      flexWrap: 'wrap',
      marginLeft: '-1em',
      paddingBottom: '3em',
    },
    '& + p': {
    },
    'img': {
      height: '50px',
      paddingRight: '1em',
      mixBlendMode: 'multiply',
      '@mobile': {
        height: '38px',
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