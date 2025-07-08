import React from "react";
import { useParams, Link } from "react-router-dom";

const demoEvents = [
  {
    id: 1,
    name: "Music Fest 2024",
    date: "2024-07-15",
    location: "Mumbai",
    price: 499,
    category: "Music",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    description: "Join us for an unforgettable night of music, fun, and celebration at Music Fest 2024!",
    schedule: [
      { time: "6:00 PM", activity: "Gates Open" },
      { time: "7:00 PM", activity: "Opening Act" },
      { time: "8:00 PM", activity: "Main Performance" },
      { time: "10:00 PM", activity: "After Party" }
    ],
    speakers: ["DJ Arjun", "Band FusionX"],
    tickets: [
      { type: "VIP", price: 999, perks: "Front row, Free drinks" },
      { type: "General", price: 499, perks: "Entry only" }
    ]
  },
  {
    id: 2,
    name: "Startup Expo",
    date: "2024-08-10",
    location: "Bangalore",
    price: 299,
    category: "Corporate",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    description: "Network with top startups and investors at the Startup Expo!",
    schedule: [
      { time: "10:00 AM", activity: "Registration" },
      { time: "11:00 AM", activity: "Keynote" },
      { time: "1:00 PM", activity: "Panel Discussion" },
      { time: "3:00 PM", activity: "Networking" }
    ],
    speakers: ["Riya Mehta", "Sanjay Kapoor"],
    tickets: [
      { type: "VIP", price: 599, perks: "Front seats, Lunch included" },
      { type: "General", price: 299, perks: "Entry only" }
    ]
  },
  // ...add more events as needed
];

const EventDetails = () => {
  const { id } = useParams();
  const event = demoEvents.find(e => e.id === Number(id));
  const related = demoEvents.filter(e => e.id !== Number(id)).slice(0, 2);

  if (!event) return <div className="text-center py-20 text-gray-500">Event not found.</div>;

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12">
        <div className="flex flex-col md:flex-row gap-8">
          <img src={event.image} alt={event.name} className="w-full md:w-1/2 h-64 object-cover rounded-2xl shadow" />
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{event.name}</h1>
              <p className="text-gray-600 mb-1">📅 {event.date}</p>
              <p className="text-gray-600 mb-1">📍 {event.location}</p>
              <p className="text-gray-700 mb-4">{event.description}</p>
              <div className="mb-4">
                <h2 className="text-lg font-semibold text-gray-700 mb-2">Schedule</h2>
                <ul className="list-disc list-inside text-gray-600">
                  {event.schedule.map((item, idx) => (
                    <li key={idx}><span className="font-semibold">{item.time}:</span> {item.activity}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-4">
                <h2 className="text-lg font-semibold text-gray-700 mb-2">Speakers/Performers</h2>
                <ul className="flex flex-wrap gap-2">
                  {event.speakers.map((s, idx) => (
                    <li key={idx} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">{s}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-4">
                <h2 className="text-lg font-semibold text-gray-700 mb-2">Tickets</h2>
                <div className="flex flex-col gap-3">
                  {event.tickets.map((t, idx) => (
                    <div key={idx} className="flex items-center justify-between bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg px-4 py-2">
                      <span className="font-bold text-gray-800">{t.type}</span>
                      <span className="text-gray-700">₹{t.price}</span>
                      <span className="text-gray-500 text-sm">{t.perks}</span>
                    </div>
                  ))}
                </div>
              </div>
          </div>
            <Link to="/checkout" className="mt-4 inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold shadow-md hover:from-blue-600 hover:to-purple-600 transition text-center">Register / Book Now</Link>
          </div>
        </div>
        {/* Related Events */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Events</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {related.map(e => (
              <Link to={`/events/${e.id}`} key={e.id} className="flex items-center gap-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow p-4 hover:shadow-lg transition">
                <img src={e.image} alt={e.name} className="w-20 h-20 object-cover rounded-xl" />
                <div>
                  <h3 className="text-lg font-bold text-gray-700">{e.name}</h3>
                  <p className="text-gray-600 text-sm">📅 {e.date} | 📍 {e.location}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
    </div>
    </section>
  );
};

export default EventDetails; 