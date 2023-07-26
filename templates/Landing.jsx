import React from 'react'
import { theme, createTheme, styled } from 'stitches.config'
import FastMarquee from 'react-fast-marquee'
import { useRouter } from 'next/router'
import { Layout } from "components/Layout";
import { Markdown } from 'components/Markdown'
import { Logos } from 'components/Logos'
import { EssayList } from 'components/EssayList'
import { VideoList } from 'components/VideoList'
import { ResourceList } from 'components/ResourceList'
import { ProducersList } from 'components/ProducersList'
import { VideoHead } from 'components/VideoHead'
import { EssaySingle } from 'components/EssaySingle'

const Page = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  position: 'relative',
})

const marqueeStyle = {
  fontFamily: '$serif',
  fontSize: '$serif1',
  paddingTop: '$1',
  letterSpacing: '0.025rem',
  textTransform: 'uppercase',
  zIndex: '100',
  '@mobile': {
    fontSize: '$serif2',
    paddingTop: '2rem',
  },
}

const Marquee = styled(FastMarquee, {
  ...marqueeStyle,
  whiteSpace: 'nowrap',
  overflow: 'hidden',
})

const StaticMarquee = styled('div', {
  ...marqueeStyle,
  paddingLeft: '$margin',
  marginBottom: '$1',
})

const Main = styled('div', {
  width: '100vw',
  minHeight: '50vh',
  position: 'relative',
  whiteSpace: 'nowrap',
  padding: '.25em 1em',
  // zIndex: 20,
  a: {
    color: 'black',
  },
  '@mobile': {
    marginTop: '-6em',
    minHeight: '20vh',
  },
  '.extra-content': {
    margin: '1.5em 8em',
    fontSize: '$sans2',
    letterSpacing: '0',
    lineHeight: '$sans2',
    display: 'block',
    p: {
      fontSize: '$sans2',
      letterSpacing: '0',
      lineHeight: '$sans2',
    },
    '@mobile': {
      margin: '1em .5em 1em 4em',
      fontSize: '$sans1',
      letterSpacing: '0',
      lineHeight: '$sans1',
    },
    '&_trigger': {
      color: 'black',
      '&:hover': {
        cursor: 'pointer',
      },
    },
  },
  p: {
    letterSpacing: '-2px',
    fontSize: '$sans5',
    lineHeight: 1,
    margin: '0',
    maxWidth: '100%',
    whiteSpace: 'pre-wrap',
    overflowWrap: 'break-word',
    '@mobile': {
      fontSize: '$sans5',
      lineHeight: '$sans5',
      letterSpacing: '-0.02em',
    },
    a: {
      textDecoration: 'underline',
      textDecorationThickness: '0.3rem',
      textUnderlineOffset: '0.5rem',
      '@mobile': {
        textDecorationThickness: '0.15rem',
        textUnderlineOffset: '0.2rem',
      },
    },
  },
  '.about': {
    
    p: {
      a: {
        textDecoration: 'underline',
        textDecorationThickness: '0.3rem',
        textUnderlineOffset: '0.5rem',
        '@mobile': {
          textDecorationThickness: '0.15rem',
          textUnderlineOffset: '0.2rem',
        },
      },
    },
  },
  '#about': {
    paddingTop: '2em',
    '@mobile': {
      padding: '1.5em',
      paddingTop: '7em',
    },
  },
  '& .padded': {
    paddingTop: '1.1em',
    button: {
      textDecoration: 'underline',
      textDecorationThickness: '0.3rem',
      textUnderlineOffset: '0.5rem',
      color: 'black',
      '@mobile': {
        textDecorationThickness: '0.15rem',
        textUnderlineOffset: '0.2rem',
      },
      '&:hover': {
        color: '${setup.color}',
      },
    },
    a: {
      textDecoration: 'underline',
      textDecorationThickness: '0.25rem',
      textUnderlineOffset: '0.5rem',
    },
  },
  '.accordion': {
    display: 'flex',
    '&__panel': {
      padding: '1em 2em',
      maxWidth: '60%',
      p: {
        fontSize: '$sans2',
        letterSpacing: '0',
      },
    },
  },
  span: {
    '&.purple': {
      color: '$highlight',
    },
    '&.green': {
      color: '$green',
    },
    '&.orange': {
      color: '$orange',
    },
  },
})

const Networked = styled('figure', {
  maxWidth: '25%',
  margin: '0 auto',
  paddingTop: '8em',
  paddingBottom: '8em',
})

const Program = styled('div', {
  position: 'relative',
  marginTop: '-5em',
  '@mobile': {
    marginTop: '0',
  },
  section: {
    padding: '1.5em',
  },
  h2: {
    fontSize: '$sans5',
    textAlign: 'center',
    padding: '1.5em 0 0',
    position: 'relative',
  },
  '.extra-content': {
    margin: '1.5em 8em',
    fontSize: '$sans2',
    letterSpacing: '0',
    lineHeight: '$sans2',
    display: 'block',
    p: {
      fontSize: '$sans2',
      letterSpacing: '0',
      lineHeight: '$sans2',
    },
    '@mobile': {
      margin: '1em .5em 1em 4em',
      fontSize: '$sans1',
      letterSpacing: '0',
      lineHeight: '$sans1',
    },
    '&_trigger': {
      color: 'black',
      '&:hover': {
        cursor: 'pointer',
      },
    },
  },
  p: {
    letterSpacing: '-2px',
    fontSize: '$sans5',
    lineHeight: '$sans5',
    margin: '0',
    maxWidth: '100%',
    whiteSpace: 'pre-wrap',
    overflowWrap: 'break-word',
    '@mobile': {
      fontSize: '$sans2',
      lineHeight: '$sans2',
      letterSpacing: '-1px',
    },
    a: {
      textDecoration: 'underline',
      textDecorationThickness: '0.3rem',
      textUnderlineOffset: '0.5rem',
      '@mobile': {
        textDecorationThickness: '0.15rem',
        textUnderlineOffset: '0.2rem',
      },
    },
  },
  '& .padded': {
    paddingTop: '1.1em',
    button: {
      color: 'black',
      textDecoration: 'underline',
      textDecorationThickness: '0.3rem',
      textUnderlineOffset: '0.5rem',
      '@mobile': {
        textDecorationThickness: '0.15rem',
        textUnderlineOffset: '0.2rem',
      },
      '&:hover': {
        color: '${setup.color}',
      },
    },
    a: {
      textDecoration: 'underline',
      textDecorationThickness: '0.25rem',
      textUnderlineOffset: '0.5rem',
    },
  },
  '.accordion': {
    display: 'flex',
    '&__panel': {
      padding: '1em 2em',
      maxWidth: '60%',
      p: {
        fontSize: '$sans2',
        letterSpacing: '0',
      },
    },
  },
  span: {
    '&.purple': {
      color: '$highlight',
    },
    '&.green': {
      color: '$green',
    },
    '&.orange': {
      color: '$orange',
    },
  },
})

export function Landing({ page = {} }) {
  const router = useRouter()
  const { query } = router

  // const { isExpanded, setIsExpanded } = useState(false);
  // function ariaControls() {
  //   setIsExpanded((isExpanded) => !isExpanded)
  // }

  return (
    <Layout>
      <VideoHead />
    
      <Main>
        <div id="about">
          <Markdown>{ page.information }</Markdown>
        </div>
      </Main>

      <Program>
        <ProducersList producers={page.producers} />
        <VideoList videos={page.videos} />
        <EssayList essays={page.essays} />
        { page.resources != " " &&
          <ResourceList resources={ page.resources } />
        }
        

        {page.image && <div className="event-image">
          <ProgressiveImg
            key={ page.image.url }
            src={ page.image.url }
            placeholderSrc={ page.image.url } 
            alt={ page.image.alternativeText }
          />
        </div>}

        <Logos
          nextWaveLogos={ page.nextWaveLogos }
          allSchoolLogos={ page.allSchoolLogos }
        ></Logos>
      </Program>

      {page.essays.map((essay) => (
        <EssaySingle
          show={ router.asPath === `/essays/${ essay.slug }`}
          key={ essay.id }
          id={ essay.id }
          title={ essay.essayTitle }
          url={ essay.essayURL }
          image={ essay.mainImage }
          author={ essay.essayAuthor }
          intro={ essay.intro }
          tagline={ essay.essayTagline }
          notes={ essay.notes }
          pdf={ essay.essayPDF }
          text={ essay.essayText }
          slug={ essay.slug }
          onClose={() => router.replace('/', undefined, { scroll: false })}
        />
      ))}

    </Layout>
  )
}
