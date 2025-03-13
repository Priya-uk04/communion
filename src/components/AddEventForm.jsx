import { useState } from 'react';

export default function AddEventForm({ onAddEvent }) {
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    category: 'Religious'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.date) return;
    onAddEvent(formData);
    setFormData({ title: '', date: '', category: 'Religious' });
  };

  return (
    <form onSubmit={handleSubmit} className="event-form">
      <input
        type="text"
        placeholder="Event Title"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        required
      />
      <input
        type="date"
        value={formData.date}
        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        required
      />
      <select
        value={formData.category}
        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
      >
        <option value="Religious">Religious</option>
        <option value="Social">Social</option>
        <option value="Charity">Charity</option>
      </select>
      <button type="submit" className="add-button">
        Add Event
      </button>
    </form>
  );
}