import EventItem from './Event';

export function EventsList(props) {
  return (
    <section>
      {props.events.map(event => (
        <EventItem
          key={event.id}
          id={event.id}
          title={event.title}
          url={event.eventURL}
          image={event.mainImage}
          startDate={event.startDate}
          endDate={event.endDate}
          descriptionShort={event.description_short}
          descriptionLong={event.description_long}
        />
      ))}
    </section>
  );
}