import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import events from "../data/events";

const EventRegistration = () => {
  const { id } = useParams();
  const event = events.find((e) => e.id === Number(id));
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tickets, setTickets] = useState(1);
  const [error, setError] = useState("");
  const [submissionStatus, setSubmissionStatus] = useState("idle"); // idle, submitting, success, error

  if (!event) {
    return (
      <div className="max-w-2xl mx-auto py-20 text-center">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Event not found</h2>
        <Link to="/events" className="text-blue-600 hover:underline">
          Back to Events
        </Link>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || tickets < 1) {
      setError("Please fill out all required fields.");
      return;
    }
    setError("");
    setSubmissionStatus("submitting");
    setTimeout(() => {
      setSubmissionStatus("success");
    }, 1500); // Simulate API call
  };

  if (submissionStatus === "success") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-200 py-12 px-4">
        <div className="w-full max-w-lg bg-white/90 rounded-3xl shadow-2xl shadow-blue-200/40 p-10 text-center">
          <h1 className="text-3xl font-extrabold text-green-600 mb-4">Registration Successful!</h1>
          <p className="text-lg text-gray-700">A confirmation has been sent to {email}.</p>
          <Link to="/events" className="mt-6 inline-block text-blue-600 hover:underline">
            Back to All Events
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-200 py-12 px-4">
      <div className="w-full max-w-lg bg-white/90 rounded-3xl shadow-2xl shadow-blue-200/40 p-10">
        <h1 className="text-3xl font-extrabold text-blue-700 mb-2 text-center drop-shadow">
          Register for {event.title}
        </h1>
        <p className="text-center text-gray-600 mb-8">
          {event.date} • {event.location}
        </p>
        <form className="space-y-6" onSubmit={handleSubmit}>
          {error && <div className="text-red-500 font-semibold">{error}</div>}
          <div>
            <label className="block text-blue-800 font-semibold mb-1">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-400 shadow-sm focus:outline-none"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-blue-800 font-semibold mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-400 shadow-sm focus:outline-none"
              placeholder="you@email.com"
            />
          </div>
          <div>
            <label className="block text-blue-800 font-semibold mb-1">Number of Tickets</label>
            <input
              type="number"
              min="1"
              max="10"
              value={tickets}
              onChange={(e) => setTickets(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-400 shadow-sm focus:outline-none"
            />
          </div>
          <button
            type="submit"
            disabled={submissionStatus === "submitting"}
            className="w-full py-3 mt-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white font-bold rounded-full shadow-lg shadow-blue-400/30 hover:from-yellow-400 hover:to-yellow-300 hover:text-blue-900 transition-all duration-300 text-lg disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {submissionStatus === "submitting" ? "Submitting..." : "Confirm Registration"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EventRegistration; 