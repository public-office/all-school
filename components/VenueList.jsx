import { VenueItem } from './Venue'

export function VenueList({ venues }) {

  console.log(venues);
  return (
    <section className='venues'>
      {venues && venues.map(venue => (
        <VenueItem
          key={venue.id}
          venueName={venue.venueName}
          venueAddress={venue.venueAddress}
          venueDetails={venue.venueDetails}
        />
      ))}
    </section>
  );
}