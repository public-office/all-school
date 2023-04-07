import { styled } from 'stitches.config'

const Artist = styled('div', {
  display: 'inline-block',
  '&:first-of-type:after': {
    content: ', ',
  },
})

export function ArtistNameList({ artists }) {
  return (
    <span>
    { 
      artists.data.map((artist) => (
        <Artist className="artist" key={artist.attributes.firstName}>{artist.attributes.firstName} {artist.attributes.lastName}</Artist>
      ))
    }
    </span>
  )
}

