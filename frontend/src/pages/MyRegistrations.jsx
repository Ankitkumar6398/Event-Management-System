import React from 'react';
import { Link } from 'react-router-dom';
import allRegistrations from '../data/registrations';
import allEvents from '../data/events';

// Simulate a logged-in user
const CURRENT_USER_EMAIL = "john.doe@example.com";

const MyRegistrations = () => {
  // Find registrations for the current user
  const userRegistrations = allRegistrations.filter(reg => reg.email === CURRENT_USER_EMAIL);

  // For each registration, find the full event details
  const registeredEvents = userRegistrations.map(reg => {
    const event = allEvents.find(e => e.id === reg.eventId);
    return {
      ...reg,
      event, // Embed the full event object
    };
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 min-h-screen bg-gray-50 dark:bg-gray-800">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-800 dark:text-white">My Registrations</h1>
        <p className="text-lg text-gray-500 dark:text-gray-300 mt-2">Events you've signed up for. Welcome, {CURRENT_USER_EMAIL}!</p>
      </div>

      {registeredEvents.length > 0 ? (
        <div className="space-y-8">
          {registeredEvents.map(({ id, tickets, event }) => (
            event ? (
              <div key={id} style={{ perspective: '1000px' }} className="group">
                <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden md:flex transform-gpu group-hover:scale-105 group-hover:-rotate-y-2 transition-all duration-500">
                  <div className="md:w-1/3 flex items-center justify-center overflow-hidden">
                    <img src={event.imageUrl} alt={event.title} className="w-full h-48 md:h-full object-cover rounded-xl shadow-lg border border-blue-100" />
                  </div>
                  <div className="p-6 md:p-8 flex-grow flex flex-col justify-between">
                    <div>
                      <p className="text-sm text-blue-500 dark:text-blue-400 font-semibold">{event.date} &bull; {event.location}</p>
                      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mt-1">{event.title}</h2>
                      <p className="text-gray-600 dark:text-gray-300 mt-2 line-clamp-2">{event.description}</p>
                    </div>
                    <div className="mt-6 flex justify-between items-center">
                      <p className="text-lg font-bold text-gray-700 dark:text-white">
                        Tickets: <span className="text-blue-600 dark:text-blue-400">{tickets}</span>
                      </p>
                      <Link to={`/events/${event.id}`} className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg font-semibold shadow-md border-b-4 border-blue-800 hover:from-blue-700 hover:to-blue-600 hover:border-blue-700 transition-all duration-200 transform-gpu active:scale-95 active:border-b-2">
                        View Event
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ) : null
          ))}
        </div>
      ) : (
        <div className="text-center py-16 px-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">No Registrations Found</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-2">You haven't registered for any events yet.</p>
          <Link to="/events" className="mt-6 inline-block px-8 py-3 bg-blue-600 text-white rounded-full font-semibold shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105">
            Explore Events
          </Link>
        </div>
      )}
    </div>
  );
};

export default MyRegistrations; 