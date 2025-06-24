import React, { useState } from "react";
import events from "../data/events";
import { Link } from "react-router-dom";

const highlightedEvents = events.slice(0, 5);

const EventCarousel = () => {
  const [current, setCurrent] = useState(0);
  const total = highlightedEvents.length;

  const prev = () => setCurrent((current - 1 + total) % total);
  const next = () => setCurrent((current + 1) % total);

  return (
    <div className="relative w-full max-w-3xl mx-auto mt-8 mb-12">
      <div className="overflow-hidden rounded-3xl shadow-2xl bg-white">
        <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${current * 100}%)` }}>
          {highlightedEvents.map((event, idx) => (
            <div key={event.id} className="min-w-full flex flex-col md:flex-row items-center group" style={{ perspective: '1000px' }}>
              <div className="flex w-full md:w-1/2 h-56 items-center justify-center overflow-hidden">
                <img src={event.imageUrl} alt={event.title} className="w-full h-56 object-cover object-center rounded-xl shadow-lg border border-blue-100 group-hover:scale-105 group-hover:-rotate-y-2 transition-all duration-500 transform-gpu" />
              </div>
              <div className="flex-1 p-6 flex flex-col justify-center group-hover:scale-105 group-hover:-rotate-y-1 transition-all duration-500 transform-gpu">
                <h3 className="text-2xl font-bold text-blue-700 mb-2 line-clamp-1">{event.title}</h3>
                <div className="text-gray-500 mb-1">{event.date} • {event.location}</div>
                <p className="text-gray-700 mb-4 line-clamp-2">{event.description}</p>
                <Link to={`/events/${event.id}`} className="inline-block px-6 py-3 font-semibold text-white rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 shadow-lg hover:from-blue-700 hover:to-blue-600 border-b-4 border-blue-800 hover:border-blue-700 transition-all duration-200 transform-gpu active:scale-95 active:border-b-2">View Details</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Navigation Buttons */}
      <button onClick={prev} aria-label="Previous" className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-blue-100 text-blue-700 rounded-full p-2 shadow-lg border-b-4 border-blue-300 hover:border-blue-500 transition-all duration-200 active:scale-95 active:border-b-2" disabled={total <= 1}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
      </button>
      <button onClick={next} aria-label="Next" className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-blue-100 text-blue-700 rounded-full p-2 shadow-lg border-b-4 border-blue-300 hover:border-blue-500 transition-all duration-200 active:scale-95 active:border-b-2" disabled={total <= 1}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
      </button>
      {/* Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {highlightedEvents.map((_, idx) => (
          <button key={idx} onClick={() => setCurrent(idx)} className={`w-3 h-3 rounded-full ${current === idx ? 'bg-blue-600' : 'bg-blue-200'} transition`} aria-label={`Go to slide ${idx + 1}`}></button>
        ))}
      </div>
    </div>
  );
};

export default EventCarousel; 