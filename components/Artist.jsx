import { styled } from 'stitches.config'

const Artist = styled('div', {
  '.artist': {
    '&-single': {
      h3: {
        fontSize: '$sans4',
        lineHeight: '$sans4',
        letterSpacing: '-0.04rem',
      }
    }
  },
})

export function ArtistItem({ firstName, lastName, website, biography }) {

  return (
    <Artist className="artist-single">
      <article>
        <h3><a href="#">{firstName} {lastName}</a></h3>
      </article>
    </Artist>
  )
}