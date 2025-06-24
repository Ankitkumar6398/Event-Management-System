import React, { useState } from "react";
import { Link } from "react-router-dom";

const mockStats = {
  users: 128,
  events: 42,
  registrations: 312,
};

const sections = [
  { key: "dashboard", label: "Dashboard" },
  { key: "users", label: "Users" },
  { key: "events", label: "Events" },
  { key: "reports", label: "Reports" },
  { key: "settings", label: "Settings" },
];

const AdminPanel = () => {
  const [active, setActive] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Mobile Sidebar Toggle */}
      <button
        className="md:hidden fixed top-4 left-4 z-40 bg-blue-600 text-white p-3 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        onClick={() => setSidebarOpen(true)}
        aria-label="Open admin menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
      </button>
      {/* Sidebar */}
      <aside className={`fixed md:static top-0 left-0 h-full z-30 transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 w-72 bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 shadow-2xl rounded-r-3xl p-8 flex flex-col gap-8 min-h-screen`}
        style={{ boxShadow: '0 10px 40px 0 rgba(30,64,175,0.15)' }}
      >
        <div className="flex items-center justify-between mb-8">
          <div className="text-2xl font-extrabold text-white select-none tracking-tight drop-shadow-lg">Admin Panel</div>
          <button className="md:hidden text-white" onClick={() => setSidebarOpen(false)} aria-label="Close admin menu">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
        <nav className="flex flex-col gap-2">
          {sections.map((s) => (
            <button
              key={s.key}
              onClick={() => { setActive(s.key); setSidebarOpen(false); }}
              className={`text-left px-4 py-2 rounded-lg font-semibold transition-all duration-200 transform-gpu flex items-center gap-2 ${active === s.key ? "bg-gradient-to-r from-yellow-400 to-yellow-300 text-blue-900 shadow-lg scale-105" : "text-white hover:bg-white/10 hover:text-yellow-300"}`}
            >
              <span className="text-lg">{s.label}</span>
            </button>
          ))}
        </nav>
        <div className="mt-auto text-xs text-blue-200">&copy; {new Date().getFullYear()} Event Manager</div>
        <button
          onClick={() => { localStorage.removeItem('token'); window.location.href = '/login'; }}
          className="mt-6 px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-700 transition"
        >
          Logout
        </button>
      </aside>
      {/* Overlay for mobile */}
      {sidebarOpen && <div className="fixed inset-0 bg-black/30 z-20 md:hidden" onClick={() => setSidebarOpen(false)} />}
      {/* Main Content */}
      <main className="flex-1 p-4 md:p-10 md:ml-0 ml-0 transition-all duration-300">
        {active === "dashboard" && (
          <div>
            <h1 className="text-3xl font-bold text-blue-700 mb-8">Admin Dashboard</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-2xl shadow-2xl p-8 flex flex-col items-center text-center transform-gpu hover:scale-105 hover:-rotate-y-2 transition-all duration-500 border-b-4 border-blue-600">
                <div className="text-4xl font-extrabold text-blue-600 mb-2">{mockStats.users}</div>
                <div className="text-blue-700 font-bold">Total Users</div>
              </div>
              <div className="bg-white rounded-2xl shadow-2xl p-8 flex flex-col items-center text-center transform-gpu hover:scale-105 hover:-rotate-y-2 transition-all duration-500 border-b-4 border-yellow-400">
                <div className="text-4xl font-extrabold text-yellow-500 mb-2">{mockStats.events}</div>
                <div className="text-yellow-700 font-bold">Total Events</div>
              </div>
              <div className="bg-white rounded-2xl shadow-2xl p-8 flex flex-col items-center text-center transform-gpu hover:scale-105 hover:-rotate-y-2 transition-all duration-500 border-b-4 border-green-500">
                <div className="text-4xl font-extrabold text-green-600 mb-2">{mockStats.registrations}</div>
                <div className="text-green-700 font-bold">Registrations</div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-2xl p-8 shadow-xl text-center mt-8">
              <h2 className="text-2xl font-bold mb-2">Welcome, Admin!</h2>
              <p className="text-blue-100">Use the sidebar to manage users, events, view reports, and configure system settings.</p>
            </div>
          </div>
        )}
        {active === "users" && (
          <div>
            <h1 className="text-2xl font-bold text-blue-700 mb-8">Users</h1>
            <div className="bg-white rounded-2xl shadow-2xl p-8 text-center text-blue-400">(User management coming soon...)</div>
          </div>
        )}
        {active === "events" && (
          <div>
            <h1 className="text-2xl font-bold text-blue-700 mb-8">Events</h1>
            <div className="bg-white rounded-2xl shadow-2xl p-8 text-center text-blue-400">(Event management coming soon...)</div>
          </div>
        )}
        {active === "reports" && (
          <div>
            <h1 className="text-2xl font-bold text-blue-700 mb-8">Reports</h1>
            <div className="bg-white rounded-2xl shadow-2xl p-8 text-center text-blue-400">(Reports and analytics coming soon...)</div>
          </div>
        )}
        {active === "settings" && (
          <div>
            <h1 className="text-2xl font-bold text-blue-700 mb-8">Settings</h1>
            <div className="bg-white rounded-2xl shadow-2xl p-8 text-center text-blue-400">(System settings coming soon...)</div>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminPanel; 