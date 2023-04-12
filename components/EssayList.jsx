import { EssayItem } from './Essay'
import { styled } from 'stitches.config'
import Link from 'next/link'

const Essays = styled('div', {
  '.essays': {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridColumnGap: '1em',
    gridRowGap: '1em',
    
    '@mobile': {
      padding: '0',
      gridTemplateColumns: '1fr',
    },
  },
  h2: {
    paddingBottom: '.25em',
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
    a: {
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
  },
})

const Author = styled('div', {
  display: 'inline-block',
  '&:not(:last-of-type):after': {
    content: ', ',
    paddingRight: '6px',
  },
  a: {
    '&:before': {
      content: '',
    },
  },
})

export function EssayList({ essays }) {

  console.log(essays)
  return (
    <Essays>
      <section>
        <h2>
          <span className="breadcrumb">
            <Link href="/commissions">Commissions</Link><br />
            {essays &&
              essays.map((essay, key) => (
                <Link key={key} href={`/essays/${essay.slug}`}>{essay.essayAuthor}</Link>
              )).reverse()
            }
          </span>
          Reading Room
        </h2>
        <div className="essays">
          {essays &&
            essays.map((essay) => (
              <EssayItem
                key={essay.id}
                id={essay.id}
                title={essay.essayTitle}
                url={essay.essayURL}
                image={essay.mainImage}
                author={essay.essayAuthor}
                tagline={essay.essayTagline}
                pdf={essay.essayPDF}
                text={essay.essayText}
                notes={essay.notes}
                intro={essay.intro}
                iframe={essay.iframe}
                tags={essay.tags}
                slug={essay.slug}
              />
            )).reverse() }
        </div>
      </section>
    </Essays>
  )
}
