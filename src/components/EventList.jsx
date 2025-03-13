export default function EventList({ events }) {
    return (
      <div className="event-list">
        {events.map(event => (
          <div key={event.id} className="event-card">
            <h3>{event.title}</h3>
            <p className="event-date">📅 {event.date}</p>
            <p className="event-category">🏷️ {event.category}</p>
            <p className="event-location">📍 {event.location}</p>
            <p className="event-description">{event.description}</p>
          </div>
        ))}
      </div>
    );
  }