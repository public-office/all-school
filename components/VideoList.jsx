import { VideoItem } from './Video'
import { styled } from 'stitches.config'
import { ArtistNameList } from 'components/ArtistNameList'
import Link from 'next/link'

const Videos = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridColumnGap: '1em',
})

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



export function VideoList({ videos }) {

  return (
    <Section>
      <section>
        <h2>
          <span className="breadcrumb">
            <Link href="/commissions">Commissions</Link><br />
            {videos &&
              videos.map((video, id) => (
                <ArtistNameList key={id} artists={video.artists} />
              ))
            }
          </span>
          Videos
        </h2>
        <Videos>
          {videos &&
            videos.map((video) => (
              <VideoItem
                key={video.id}
                id={video.id}
                title={video.title}
                video={video.video}
                artists={video.artists}
                placeholder={video.placeholder}
                context={video.context}
                description={video.description}
                embed={video.youtube_embed}
              />
            ))
          }
        </Videos>
      </section>
    </Section>
  )
}
