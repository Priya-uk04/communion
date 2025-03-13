import { useState } from 'react';
import { motion } from 'framer-motion';
import EventList from '../components/EventList';
import AddEventForm from '../components/AddEventForm';

export default function Events() {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: 'Interfaith Charity Dinner',
      date: '2025-03-15',
      category: 'Charity',
      location: 'Community Center',
      description: 'Join us for a night of food and fundraising'
    },
    {
      id: 2,
      title: 'Meditation Session',
      date: '2025-03-20',
      category: 'Religious',
      location: 'Peace Temple',
      description: 'Guided meditation for all faiths'
    }
  ]);

  const [filter, setFilter] = useState('All');

  const handleAddEvent = (newEvent) => {
    setEvents([...events, { id: Date.now(), ...newEvent }]);
  };

  const filteredEvents = filter === 'All' 
    ? events 
    : events.filter(event => event.category === filter);

  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -100, opacity: 0 }}
      className="events-page"
    >
      <div className="filter-section">
        <select 
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="category-filter"
        >
          <option value="All">All Categories</option>
          <option value="Religious">Religious</option>
          <option value="Social">Social</option>
          <option value="Charity">Charity</option>
        </select>
      </div>

      <AddEventForm onAddEvent={handleAddEvent} />
      <EventList events={filteredEvents} />
    </motion.div>
  );
}