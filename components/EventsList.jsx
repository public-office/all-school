import { EventItem } from './Event'

export function EventsList({ events }) {
  return (
    <section className='events'>
      {events.map(event => (
        <EventItem
          key={event.id}
          title={event.title}
          image={event.mainImage}
          location={event.location}
          shortDesc={event.description_short}
          longDesc={event.description_long}
          eventUrl={event.eventUrl}
          eventPdf={event.eventPdf}
        />
      ))}
    </section>
  );
}