import React from "react";
import { Link } from "react-router-dom";

const events = [
  {
    id: 1,
    name: "Music Fest 2024",
    date: "2024-07-15",
    location: "Mumbai",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 2,
    name: "Startup Expo",
    date: "2024-08-10",
    location: "Bangalore",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 3,
    name: "Food Carnival",
    date: "2024-09-05",
    location: "Delhi",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80"
  }
];

const UpcomingEvents = () => (
  <section className="py-12 px-4 bg-white">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Upcoming Events</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {events.map(event => (
          <div key={event.id} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-lg overflow-hidden flex flex-col">
            <img src={event.image} alt={event.name} className="h-40 w-full object-cover" />
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{event.name}</h3>
                <p className="text-gray-600 mb-1">📅 {event.date}</p>
                <p className="text-gray-600">📍 {event.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <Link to="/events" className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-blue-700 transition">View All Events</Link>
      </div>
    </div>
  </section>
);

export default UpcomingEvents; 