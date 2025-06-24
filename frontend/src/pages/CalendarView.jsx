import React, { useState } from 'react';
import Calendar from 'react-calendar';
import '../Calendar.css'; // Custom styling
import eventsData from '../data/events';
import { Link } from 'react-router-dom';

const CalendarView = () => {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState(eventsData);

  // Safely parse date to avoid timezone issues
  const getEventsForDate = (d) =>
    events.filter(event => {
      const eventDate = new Date(event.date);
      return eventDate.getUTCFullYear() === d.getUTCFullYear() &&
             eventDate.getUTCMonth() === d.getUTCMonth() &&
             eventDate.getUTCDate() === d.getUTCDate();
    });

  const tileContent = ({ date: tileDate, view }) => {
    if (view === 'month') {
      const eventsOnDate = getEventsForDate(tileDate);
      if (eventsOnDate.length > 0) {
        return <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-blue-500 rounded-full" />;
      }
    }
    return null;
  };

  const selectedEvents = getEventsForDate(date);

  return (
    <div className="max-w-4xl mx-auto py-10 px-4 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">Event Calendar</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <Calendar
            onChange={setDate}
            value={date}
            tileContent={tileContent}
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-xl font-semibold text-blue-800 mb-4">
            Events on {date.toLocaleDateString()}
          </h2>
          <div className="space-y-4">
            {selectedEvents.length > 0 ? (
              selectedEvents.map(event => (
                <Link to={`/events/${event.id}`} key={event.id} className="block p-4 bg-white rounded-lg shadow hover:bg-blue-50 transition">
                  <h3 className="font-bold text-blue-700">{event.title}</h3>
                  <p className="text-sm text-gray-600">{event.time} • {event.location}</p>
                </Link>
              ))
            ) : (
              <p className="text-gray-500">No events scheduled for this day.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarView; 