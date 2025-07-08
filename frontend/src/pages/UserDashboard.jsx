import React from "react";

const user = {
  name: "Priya Sharma",
  email: "priya@example.com",
  phone: "+91-9876543210"
};

const bookings = [
  {
    id: 1,
    event: "Music Fest 2024",
    date: "2024-07-15",
    status: "Upcoming"
  },
  {
    id: 2,
    event: "Startup Expo",
    date: "2024-08-10",
    status: "Upcoming"
  }
];

const pastEvents = [
  {
    id: 3,
    event: "Food Carnival",
    date: "2023-09-05"
  }
];

const UserDashboard = () => (
  <section className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-12 px-4">
    <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome, {user.name}!</h1>
      <p className="text-gray-600 mb-6">Manage your bookings and profile below.</p>
      {/* Profile Info */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Profile Info</h2>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <p className="text-gray-700"><span className="font-semibold">Email:</span> {user.email}</p>
            <p className="text-gray-700"><span className="font-semibold">Phone:</span> {user.phone}</p>
          </div>
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-lg font-semibold shadow hover:from-blue-600 hover:to-purple-600 transition">Edit Profile</button>
        </div>
      </div>
      {/* Upcoming Bookings */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">My Bookings</h2>
        {bookings.length === 0 ? (
          <p className="text-gray-500">No upcoming bookings.</p>
        ) : (
          <ul className="space-y-3">
            {bookings.map(b => (
              <li key={b.id} className="flex flex-col md:flex-row md:items-center justify-between bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg px-4 py-3">
                <div>
                  <span className="font-bold text-gray-800">{b.event}</span>
                  <span className="text-gray-600 ml-2">📅 {b.date}</span>
                </div>
                <span className="text-blue-600 font-semibold mt-2 md:mt-0">{b.status}</span>
                <button className="ml-4 bg-red-100 text-red-600 px-3 py-1 rounded hover:bg-red-200 transition text-sm">Cancel</button>
              </li>
            ))}
          </ul>
        )}
      </div>
      {/* Past Events */}
      <div>
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Past Events</h2>
        {pastEvents.length === 0 ? (
          <p className="text-gray-500">No past events.</p>
        ) : (
          <ul className="space-y-3">
            {pastEvents.map(e => (
              <li key={e.id} className="flex flex-col md:flex-row md:items-center justify-between bg-gray-100 rounded-lg px-4 py-3">
                <div>
                  <span className="font-bold text-gray-800">{e.event}</span>
                  <span className="text-gray-600 ml-2">📅 {e.date}</span>
                </div>
                <span className="text-gray-500 font-semibold mt-2 md:mt-0">Completed</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  </section>
);

export default UserDashboard; 