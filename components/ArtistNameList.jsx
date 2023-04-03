export function ArtistNameList({ artists }) {
  return (
    <span>
    { 
      artists.data.map((artist) => (
        <span key={artist.attributes.firstName}>{artist.attributes.firstName} {artist.attributes.lastName}</span>
      ))
    }
    </span>
  )
}

