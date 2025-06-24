import React, { useState, useEffect } from "react";
import eventsData from "../data/events";
import { Link } from "react-router-dom";

function getStoredEvents() {
  const stored = localStorage.getItem("events");
  return stored ? JSON.parse(stored) : eventsData;
}

function saveEvents(events) {
  localStorage.setItem("events", JSON.stringify(events));
}

const Dashboard = () => {
  const [events, setEvents] = useState(getStoredEvents());

  useEffect(() => {
    setEvents(getStoredEvents());
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      const updated = events.filter(event => event.id !== id);
      setEvents(updated);
      saveEvents(updated);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-100">
      <h1 className="text-3xl font-bold text-blue-700 mb-8 text-center">Your Events</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.length > 0 ? (
          events.map(event => (
            <div key={event.id} style={{ perspective: '1000px' }} className="group h-full">
              <div className="bg-white rounded-2xl shadow-xl shadow-blue-200/40 p-6 flex flex-col h-full overflow-hidden transform-gpu group-hover:scale-105 group-hover:shadow-2xl group-hover:-rotate-y-2 transition-all duration-500">
                <img src={event.imageUrl} alt={event.title} className="w-full h-40 object-cover rounded-lg mb-4 shadow-lg border border-blue-100" />
                <h2 className="text-xl font-bold text-blue-700 mb-1 line-clamp-1">{event.title}</h2>
                <div className="text-sm text-gray-500 mb-2">{event.date} • {event.location}</div>
                <p className="text-gray-700 mb-4 line-clamp-2 flex-1">{event.description}</p>
                <div className="flex space-x-2 mt-auto">
                  <Link to={`/events/${event.id}`} className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg font-semibold shadow border-b-4 border-blue-800 hover:from-blue-700 hover:to-blue-600 hover:border-blue-700 transition-all duration-200 transform-gpu active:scale-95 active:border-b-2">View</Link>
                  <Link to={`/create?edit=${event.id}`} className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-yellow-300 text-blue-900 rounded-lg font-semibold shadow border-b-4 border-yellow-600 hover:from-yellow-500 hover:to-yellow-400 hover:border-yellow-700 transition-all duration-200 transform-gpu active:scale-95 active:border-b-2">Edit</Link>
                  <Link to={`/registrations/${event.id}`} className="px-4 py-2 bg-gradient-to-r from-green-500 to-green-400 text-white rounded-lg font-semibold shadow border-b-4 border-green-700 hover:from-green-600 hover:to-green-500 hover:border-green-800 transition-all duration-200 transform-gpu active:scale-95 active:border-b-2">Registrations</Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500 py-12">You have not created any events yet.</div>
        )}
      </div>
    </div>
  );
};

export default Dashboard; 