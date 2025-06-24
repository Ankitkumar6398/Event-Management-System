import React from "react";
import HeroSection from "../components/HeroSection";
import EventCarousel from "../components/EventCarousel";
import EventCard from "../components/EventCard";
import events from "../data/events";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="flex flex-col items-center justify-center w-full bg-gradient-to-b from-blue-50 via-white to-blue-100 min-h-screen pb-12">
    <HeroSection />
    <EventCarousel />
    {/* Upcoming Events Section */}
    <section className="w-full max-w-6xl px-4 mt-[-3rem] z-20 relative">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-6">
        <h2 className="text-3xl font-bold text-blue-800 mb-2 md:mb-0 drop-shadow">Upcoming Events</h2>
        <Link to="/events" className="text-blue-600 font-semibold hover:underline hover:text-yellow-500 transition-colors">View All Events →</Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.slice(0, 3).map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
      {events.length === 0 && (
        <div className="text-gray-500 text-center py-8">No upcoming events yet.</div>
      )}
    </section>
    {/* How It Works Section */}
    <section className="w-full max-w-5xl px-4 mt-20 mb-16">
      <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-8 text-center">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center transform-gpu hover:scale-105 hover:-rotate-y-2 transition-all duration-500">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-blue-600 text-white text-3xl mb-4 shadow-lg">1</div>
          <h3 className="font-bold text-lg text-blue-700 mb-2">Create or Discover Events</h3>
          <p className="text-gray-600">Easily create your own event or browse a curated list of upcoming events in your area.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center transform-gpu hover:scale-105 hover:-rotate-y-2 transition-all duration-500">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 text-white text-3xl mb-4 shadow-lg">2</div>
          <h3 className="font-bold text-lg text-yellow-700 mb-2">Register & Participate</h3>
          <p className="text-gray-600">Sign up for events, secure your spot, and get all the details you need to attend and enjoy.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center transform-gpu hover:scale-105 hover:-rotate-y-2 transition-all duration-500">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-green-600 text-white text-3xl mb-4 shadow-lg">3</div>
          <h3 className="font-bold text-lg text-green-700 mb-2">Connect & Share</h3>
          <p className="text-gray-600">Engage with other attendees, leave feedback, and share your experience with friends.</p>
        </div>
      </div>
    </section>
    {/* Footer */}
    <footer className="w-full bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400 text-white py-10 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row md:justify-between items-center md:items-start gap-8">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <div className="text-2xl font-extrabold tracking-tight mb-2">Event Manager</div>
          <p className="text-blue-100">Effortless event creation, discovery, and management.</p>
        </div>
        <div className="flex flex-col md:flex-row gap-8 text-center md:text-left">
          <div>
            <div className="font-bold mb-2">Quick Links</div>
            <ul className="space-y-1">
              <li><Link to="/events" className="hover:underline">Events</Link></li>
              <li><Link to="/create" className="hover:underline">Create Event</Link></li>
              <li><Link to="/dashboard" className="hover:underline">Dashboard</Link></li>
              <li><Link to="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-bold mb-2">About</div>
            <ul className="space-y-1">
              <li><Link to="/about" className="hover:underline">About Us</Link></li>
              <li><Link to="/login" className="hover:underline">Login</Link></li>
              <li><Link to="/signup" className="hover:underline">Signup</Link></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-end gap-2">
          <div className="font-bold mb-2">Follow Us</div>
          <div className="flex space-x-4">
            <a href="#" aria-label="Twitter" className="hover:text-yellow-300"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.59-2.47.7a4.3 4.3 0 001.88-2.37 8.59 8.59 0 01-2.72 1.04A4.28 4.28 0 0016.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.1.99C7.69 9.13 4.07 7.38 1.64 4.7c-.37.64-.58 1.38-.58 2.17 0 1.5.76 2.82 1.92 3.6-.7-.02-1.36-.21-1.94-.53v.05c0 2.1 1.5 3.85 3.5 4.25-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.7 2.1 2.94 3.95 2.97A8.6 8.6 0 012 19.54c-.29 0-.57-.02-.85-.05A12.13 12.13 0 007.29 21.5c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.18 8.18 0 0024 4.59a8.36 8.36 0 01-2.54.7z" /></svg></a>
            <a href="#" aria-label="Facebook" className="hover:text-yellow-300"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.68 0H1.32C.59 0 0 .6 0 1.33v21.34C0 23.4.59 24 1.32 24h11.5v-9.29H9.69v-3.62h3.13V8.41c0-3.1 1.89-4.79 4.65-4.79 1.32 0 2.45.1 2.78.14v3.22h-1.91c-1.5 0-1.8.71-1.8 1.76v2.31h3.6l-.47 3.62h-3.13V24h6.13c.73 0 1.32-.6 1.32-1.33V1.33C24 .6 23.41 0 22.68 0" /></svg></a>
            <a href="#" aria-label="Instagram" className="hover:text-yellow-300"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.16c3.2 0 3.584.012 4.85.07 1.17.056 1.97.24 2.43.41.59.22 1.01.48 1.45.92.44.44.7.86.92 1.45.17.46.354 1.26.41 2.43.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.41 2.43-.22.59-.48 1.01-.92 1.45-.44.44-.86.7-1.45.92-.46.17-1.26.354-2.43.41-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.43-.41-.59-.22-1.01-.48-1.45-.92-.44-.44-.7-.86-.92-1.45-.17-.46-.354-1.26-.41-2.43C2.172 15.584 2.16 15.2 2.16 12s.012-3.584.07-4.85c.056-1.17.24-1.97.41-2.43.22-.59.48-1.01.92-1.45.44-.44.86-.7 1.45-.92.46-.17 1.26-.354 2.43-.41C8.416 2.172 8.8 2.16 12 2.16zm0-2.16C8.736 0 8.332.012 7.052.07c-1.28.058-2.15.25-2.91.53-.8.29-1.48.68-2.16 1.36-.68.68-1.07 1.36-1.36 2.16-.28.76-.472 1.63-.53 2.91C.012 8.332 0 8.736 0 12c0 3.264.012 3.668.07 4.948.058 1.28.25 2.15.53 2.91.29.8.68 1.48 1.36 2.16.68.68 1.36 1.07 2.16 1.36.76.28 1.63.472 2.91.53C8.332 23.988 8.736 24 12 24s3.668-.012 4.948-.07c1.28-.058 2.15-.25 2.91-.53.8-.29 1.48-.68 2.16-1.36.68-.68 1.07-1.36 1.36-2.16.28-.76.472-1.63.53-2.91.058-1.28.07-1.684.07-4.948s-.012-3.668-.07-4.948c-.058-1.28-.25-2.15-.53-2.91-.29-.8-.68-1.48-1.36-2.16-.68-.68-1.36-1.07-2.16-1.36-.76-.28-1.63-.472-2.91-.53C15.668.012 15.264 0 12 0zm0 5.838A6.162 6.162 0 0 0 5.838 12 6.162 6.162 0 0 0 12 18.162 6.162 6.162 0 0 0 18.162 12 6.162 6.162 0 0 0 12 5.838zm0 10.162A3.999 3.999 0 1 1 12 8a3.999 3.999 0 0 1 0 7.999zm7.844-11.406a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" /></svg></a>
          </div>
          <div className="text-blue-100 text-sm mt-2">&copy; {new Date().getFullYear()} Event Manager. All rights reserved.</div>
        </div>
      </div>
    </footer>
  </div>
);

export default Home; 