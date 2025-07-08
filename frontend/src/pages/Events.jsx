import React, { useState } from "react";
import { Link } from "react-router-dom";

const demoEvents = [
  {
    id: 1,
    name: "Music Fest 2024",
    date: "2024-07-15",
    location: "Mumbai",
    price: 499,
    category: "Music",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 2,
    name: "Startup Expo",
    date: "2024-08-10",
    location: "Bangalore",
    price: 299,
    category: "Corporate",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 3,
    name: "Food Carnival",
    date: "2024-09-05",
    location: "Delhi",
    price: 199,
    category: "Food",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 4,
    name: "Wedding Expo",
    date: "2024-10-12",
    location: "Jaipur",
    price: 399,
    category: "Wedding",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 5,
    name: "Sports Mania",
    date: "2024-11-20",
    location: "Kolkata",
    price: 350,
    category: "Sports",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
  }
];

const categories = ["All", "Music", "Corporate", "Food", "Wedding", "Sports"];

const Events = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [location, setLocation] = useState("");

  const filteredEvents = demoEvents.filter(event => {
    return (
      (category === "All" || event.category === category) &&
      (location === "" || event.location.toLowerCase().includes(location.toLowerCase())) &&
      (search === "" || event.name.toLowerCase().includes(search.toLowerCase()))
    );
  });

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">All Events</h1>
        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 justify-center items-center">
          <input
            type="text"
            placeholder="Search events..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full md:w-64"
          />
          <select
            value={category}
            onChange={e => setCategory(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full md:w-48"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={e => setLocation(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full md:w-48"
          />
        </div>
        {/* Events Grid */}
        <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {filteredEvents.length === 0 ? (
            <div className="col-span-full text-center text-gray-500">No events found.</div>
          ) : (
            filteredEvents.map(event => (
              <div key={event.id} className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
                <img src={event.image} alt={event.name} className="h-40 w-full object-cover" />
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{event.name}</h3>
                    <p className="text-gray-600 mb-1">📅 {event.date}</p>
                    <p className="text-gray-600 mb-1">📍 {event.location}</p>
                    <p className="text-gray-700 font-semibold mb-2">₹{event.price}</p>
                  </div>
                  <Link to={`/events/${event.id}`} className="mt-2 inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg font-semibold shadow hover:from-blue-600 hover:to-purple-600 transition text-center">View Details</Link>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Events;
 