import { ArtistItem } from './Artist'

export function ArtistList({ artists }) {

  return (
    <section className='artists'>
      {artists && artists.map(artist => (
        <ArtistItem
          key={artist.id}
          firstName={artist.firstName}
          lastName={artist.lastName}
          website={artist.website}
          biography={artist.biography}
        />
      ))}
    </section>
  );
}