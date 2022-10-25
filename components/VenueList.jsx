import { VenueItem } from './Venue'

export function VenueList({ venues }) {

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