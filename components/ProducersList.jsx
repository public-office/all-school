import { styled } from 'stitches.config'
import { Producer } from './Producer'
import Link from 'next/link'

const Section = styled('div', {
  section: {
    padding: '0 2em',
  },
  '.breadcrumb': {
    textAlign: 'left',
    position: 'absolute',
    left: '0',
    paddingTop: '1em',
    fontSize: '$sans1',
    '@mobile': {
      display: 'none',
    },
    h2: {
      '@mobile': {
        fontSize: '$sans6',
      },
    },
    a: {
      pointerEvents: 'none',
      '&.no-link': {
        pointerEvents: 'none',
      },
      '&:first-child': {
        '&:before': {
          content: '\\2191',
        },
      },
      '&:not(:first-child):after': {
        content: ', ',
      },
      '&:last-child:after': {
        content: '',
      },

    },
    span: {
      '&:not(:first-child):after': {
        content: ', ',
      },
      '&:last-child:after': {
        content: '',
      },
    },
  },
})

const Producers = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridColumnGap: '1em',
})

export function ProducersList({ producers }) {
  return (
    <Section>
      <section>
        <h2>
          <span className="breadcrumb">
            <Link className="no-link" href="/commissions">Commissions</Link><br />
            {producers &&
              producers.map((producer, id) => (
                <ArtistNameList key={id} artists={producer.artists} />
              ))
            }
          </span>
          Producers
        </h2>
        <Producers>
          {producers &&
            producers.map((producer) => (
              <Producer
                key={producer.id}
                id={producer.id}
                name={producer.name}
                project={producer.project}
                img={producer.img}
                url={producer.project_url}
              />
            ))
          }
        </Producers>
      </section>
    </Section>
    
    
  )
}