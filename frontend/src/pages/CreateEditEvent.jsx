import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import eventsData from "../data/events";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function getStoredEvents() {
  const stored = localStorage.getItem("events");
  return stored ? JSON.parse(stored) : eventsData;
}

function saveEvents(events) {
  localStorage.setItem("events", JSON.stringify(events));
}

const CreateEditEvent = () => {
  const query = useQuery();
  const navigate = useNavigate();
  const editId = query.get("edit");
  const [events, setEvents] = useState(getStoredEvents());
  const editingEvent = events.find(e => String(e.id) === editId);

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    setEvents(getStoredEvents());
  }, []);

  useEffect(() => {
    if (editingEvent) {
      setTitle(editingEvent.title);
      setDate(editingEvent.date);
      setTime(editingEvent.time);
      setLocation(editingEvent.location);
      setImageUrl(editingEvent.imageUrl);
      setDescription(editingEvent.description);
    } else {
      setTitle("");
      setDate("");
      setTime("");
      setLocation("");
      setImageUrl("");
      setDescription("");
    }
  }, [editingEvent]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !date || !location) {
      setError("Title, date, and location are required.");
      return;
    }
    setError("");
    let updatedEvents;
    if (editId && editingEvent) {
      updatedEvents = events.map(ev =>
        String(ev.id) === editId
          ? { ...ev, title, date, time, location, imageUrl, description }
          : ev
      );
    } else {
      const newEvent = {
        id: Date.now(),
        title,
        date,
        time,
        location,
        imageUrl,
        description,
      };
      updatedEvents = [newEvent, ...events];
    }
    saveEvents(updatedEvents);
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-200 py-12 px-4">
      <div className="w-full max-w-xl bg-white/90 rounded-3xl shadow-2xl shadow-blue-200/40 p-10 transform-gpu hover:scale-[1.02] transition-transform duration-500">
        <h1 className="text-3xl font-extrabold text-blue-700 mb-8 text-center drop-shadow">{editId ? "Edit Event" : "Create Event"}</h1>
        <form className="space-y-6" onSubmit={handleSubmit}>
          {error && <div className="text-red-600 font-semibold text-center mb-2">{error}</div>}
          <div>
            <label className="block text-blue-800 font-semibold mb-1">Title</label>
            <input type="text" className="w-full px-4 py-2 rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-400 shadow-sm focus:outline-none" placeholder="Event Title" value={title} onChange={e => setTitle(e.target.value)} />
          </div>
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
            <div className="flex-1">
              <label className="block text-blue-800 font-semibold mb-1">Date</label>
              <input type="date" className="w-full px-4 py-2 rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-400 shadow-sm focus:outline-none" value={date} onChange={e => setDate(e.target.value)} />
            </div>
            <div className="flex-1">
              <label className="block text-blue-800 font-semibold mb-1">Time</label>
              <input type="time" className="w-full px-4 py-2 rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-400 shadow-sm focus:outline-none" value={time} onChange={e => setTime(e.target.value)} />
            </div>
          </div>
          <div>
            <label className="block text-blue-800 font-semibold mb-1">Location</label>
            <input type="text" className="w-full px-4 py-2 rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-400 shadow-sm focus:outline-none" placeholder="Event Location" value={location} onChange={e => setLocation(e.target.value)} />
          </div>
          <div>
            <label className="block text-blue-800 font-semibold mb-1">Image URL</label>
            <input type="url" className="w-full px-4 py-2 rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-400 shadow-sm focus:outline-none" placeholder="https://..." value={imageUrl} onChange={e => setImageUrl(e.target.value)} />
          </div>
          <div>
            <label className="block text-blue-800 font-semibold mb-1">Description</label>
            <textarea className="w-full px-4 py-2 rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-400 shadow-sm focus:outline-none resize-none min-h-[100px]" placeholder="Event Description" value={description} onChange={e => setDescription(e.target.value)}></textarea>
          </div>
          <button type="submit" className="w-full py-3 mt-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white font-bold rounded-full shadow-lg shadow-blue-400/30 hover:from-yellow-400 hover:to-yellow-300 hover:text-blue-900 transform-gpu hover:scale-105 transition-all duration-300 text-lg">{editId ? "Update Event" : "Save Event"}</button>
        </form>
      </div>
    </div>
  );
};

export default CreateEditEvent; 