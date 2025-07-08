import React from "react";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 px-4 py-12">
      <div className="w-full max-w-2xl bg-white bg-opacity-90 rounded-3xl shadow-2xl p-8 md:p-12 flex flex-col items-center text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-2">Welcome, {user.name}!</h1>
        <p className="text-lg text-gray-600 mb-6">You are logged in as <span className="font-semibold text-blue-600">{user.role}</span>.</p>
        {user && (
          <div className="mb-4">
            <p className="font-semibold">Email: <span className="font-normal">{user.email}</span></p>
          </div>
        )}
        <div className="w-full flex flex-col md:flex-row gap-6 justify-center">
          <div className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
            <span className="text-4xl mb-2">📅</span>
            <h2 className="text-xl font-bold mb-1">Your Events</h2>
            <p className="text-lg">0 events</p>
            <p className="text-sm mt-2">(Connect to backend to show real data)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard; 