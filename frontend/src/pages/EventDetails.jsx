import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import events from "../data/events";
import EventCard from "../components/EventCard";
import Comments from "../components/Comments";

const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = events.find(e => e.id === Number(id));
  const [copied, setCopied] = useState(false);

  if (!event) {
    return (
      <div className="max-w-2xl mx-auto py-20 text-center">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Event not found</h2>
        <Link to="/events" className="text-blue-600 hover:underline">Back to Events</Link>
      </div>
    );
  }

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const relatedEvents = events
    .filter(e => e.type === event.type && e.id !== event.id)
    .slice(0, 3);

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 bg-gradient-to-b from-blue-50 via-white to-blue-100 min-h-screen">
      <button onClick={() => navigate(-1)} className="mb-6 text-blue-600 hover:underline">← Back</button>
      <div className="bg-white rounded-3xl shadow-2xl shadow-blue-200/40 overflow-hidden flex flex-col md:flex-row transform-gpu hover:scale-105 hover:-rotate-y-2 transition-all duration-500">
        <img src={event.imageUrl} alt={event.title} className="w-full md:w-1/2 h-64 md:h-auto object-cover object-center rounded-xl shadow-lg border border-blue-100" />
        <div className="p-8 flex-1 flex flex-col">
          <h1 className="text-3xl font-extrabold text-blue-700 mb-2">{event.title}</h1>
          <div className="flex flex-wrap items-center text-gray-500 mb-4 space-x-4">
            <span>📅 {event.date}</span>
            <span>⏰ {event.time}</span>
            <span>📍 {event.location}</span>
          </div>
          <p className="text-lg text-gray-700 mb-6">{event.description}</p>
          {/* Speakers/hosts could go here if available */}
          <div className="flex items-center space-x-2 mt-auto">
            <button onClick={handleCopyLink} className="px-6 py-3 bg-gradient-to-r from-gray-200 to-gray-100 text-gray-700 font-semibold rounded-lg shadow border-b-4 border-gray-400 hover:from-gray-300 hover:to-gray-200 hover:border-gray-500 transition-all duration-200 transform-gpu active:scale-95 active:border-b-2">
              {copied ? "Copied!" : "Share"}
            </button>
            <Link to={`/register/${event.id}`} className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold rounded-lg shadow border-b-4 border-blue-800 hover:from-blue-700 hover:to-blue-600 hover:border-blue-700 transition-all duration-200 transform-gpu active:scale-95 active:border-b-2 w-full md:w-auto text-center">
              Register
            </Link>
          </div>
        </div>
      </div>

      {/* Related Events Section */}
      {relatedEvents.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Related Events</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedEvents.map(e => (
              <EventCard key={e.id} event={e} />
            ))}
          </div>
        </div>
      )}
      
      {/* Comments Section */}
      <Comments eventId={event.id} />
    </div>
  );
};

export default EventDetails; 