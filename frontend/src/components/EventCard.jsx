import React from "react";
import { Link } from "react-router-dom";

const typeColors = {
  Conference: "bg-blue-200 text-blue-800",
  Meetup: "bg-green-200 text-green-800",
  Festival: "bg-pink-200 text-pink-800",
  Concert: "bg-purple-200 text-purple-800",
  Workshop: "bg-yellow-200 text-yellow-800",
  Default: "bg-gray-200 text-gray-800",
};

const EventCard = ({ event }) => (
  <div style={{ perspective: '1000px' }} className="group h-full">
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl shadow-blue-200/40 dark:shadow-blue-900/40 overflow-hidden transform-gpu group-hover:scale-105 group-hover:shadow-2xl group-hover:-rotate-y-2 transition-all duration-500 flex flex-col h-full">
      <img
        src={event.imageUrl}
        alt={event.title}
        className="w-full h-48 object-cover object-center"
        loading="lazy"
      />
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-2">
          <span className={`px-3 py-1 rounded-full text-xs font-bold ${typeColors[event.type] || typeColors.Default} dark:bg-opacity-80`}>{event.type || "Other"}</span>
          <span className={`px-3 py-1 rounded-full text-xs font-bold ${event.price === 0 ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"} dark:bg-opacity-80`}>
            {event.price === 0 ? "Free" : `$${event.price}`}
          </span>
        </div>
        <h3 className="text-xl font-bold text-blue-700 dark:text-blue-300 mb-1 line-clamp-1">{event.title}</h3>
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
          <span className="mr-2">📅 {event.date}</span>
          <span>📍 {event.location}</span>
        </div>
        <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-2 flex-1">{event.description}</p>
        <Link
          to={`/events/${event.id}`}
          className="mt-auto inline-block text-center px-6 py-3 font-semibold text-white rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 shadow-lg hover:from-blue-700 hover:to-blue-600 border-b-4 border-blue-800 hover:border-blue-700 transition-all duration-200 transform-gpu active:scale-95 active:border-b-2"
        >
          View Details
        </Link>
      </div>
    </div>
  </div>
);

export default EventCard; 