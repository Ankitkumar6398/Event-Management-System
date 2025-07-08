import React, { useState } from "react";

const demoEvents = [
  { id: 1, name: "Music Fest 2024", date: "2024-07-15", location: "Mumbai" },
  { id: 2, name: "Startup Expo", date: "2024-08-10", location: "Bangalore" }
];
const demoUsers = [
  { id: 1, name: "Priya Sharma", email: "priya@example.com" },
  { id: 2, name: "Rahul Verma", email: "rahul@example.com" }
];
const demoBookings = [
  { id: 1, user: "Priya Sharma", event: "Music Fest 2024", status: "Confirmed" },
  { id: 2, user: "Rahul Verma", event: "Startup Expo", status: "Pending" }
];

const AdminPanel = () => {
  const [events] = useState(demoEvents);
  const [users] = useState(demoUsers);
  const [bookings] = useState(demoBookings);

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-12 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Admin Panel</h1>
        {/* Event Management */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Manage Events</h2>
          <table className="w-full mb-2 text-left">
            <thead>
              <tr className="bg-blue-100">
                <th className="py-2 px-3">Name</th>
                <th className="py-2 px-3">Date</th>
                <th className="py-2 px-3">Location</th>
                <th className="py-2 px-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {events.map(e => (
                <tr key={e.id} className="border-b">
                  <td className="py-2 px-3">{e.name}</td>
                  <td className="py-2 px-3">{e.date}</td>
                  <td className="py-2 px-3">{e.location}</td>
                  <td className="py-2 px-3 flex gap-2">
                    <button className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded hover:bg-yellow-200 transition text-sm">Edit</button>
                    <button className="bg-red-100 text-red-600 px-3 py-1 rounded hover:bg-red-200 transition text-sm">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="mt-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-lg font-semibold shadow hover:from-blue-600 hover:to-purple-600 transition">Add Event</button>
        </div>
        {/* User Management */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Manage Users</h2>
          <table className="w-full mb-2 text-left">
            <thead>
              <tr className="bg-blue-100">
                <th className="py-2 px-3">Name</th>
                <th className="py-2 px-3">Email</th>
              </tr>
            </thead>
            <tbody>
              {users.map(u => (
                <tr key={u.id} className="border-b">
                  <td className="py-2 px-3">{u.name}</td>
                  <td className="py-2 px-3">{u.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Booking Management */}
          <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Manage Bookings</h2>
          <table className="w-full mb-2 text-left">
            <thead>
              <tr className="bg-blue-100">
                <th className="py-2 px-3">User</th>
                <th className="py-2 px-3">Event</th>
                <th className="py-2 px-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map(b => (
                <tr key={b.id} className="border-b">
                  <td className="py-2 px-3">{b.user}</td>
                  <td className="py-2 px-3">{b.event}</td>
                  <td className="py-2 px-3">{b.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
              </div>
            </div>
    </section>
  );
};

export default AdminPanel; 