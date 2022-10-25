import { EventItem } from './Event'

export function EventsList({ events }) {

  return (
    <section className='events'>
      {events && events.map(event => (
        <EventItem
          key={event.id}
          title={event.title}
          image={event.mainImage}
          location={event.location}
          startDate={event.startDate}
          endDate={event.endDate}
          startTime={event.startTime}
          endTime={event.endTime}
          shortDesc={event.description_short}
          longDesc={event.description_long}
          eventUrl={event.eventUrl}
          eventPdf={event.eventPdf}
        />
      ))}
    </section>
  );
}