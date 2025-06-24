import React from "react";
import { Link } from "react-router-dom";
import './HeroSection.css'; // We'll create this file for animations

const HeroSection = () => (
  <section className="relative flex flex-col items-center justify-center min-h-[60vh] w-full bg-gradient-to-br from-blue-100 via-blue-300 to-blue-500 dark:from-gray-800 dark:via-gray-900 dark:to-black overflow-hidden group" style={{ perspective: '1200px' }}>
    {/* Floating Card */}
    <div className="relative z-10 w-full max-w-2xl bg-white/90 dark:bg-gray-800/80 rounded-3xl shadow-2xl shadow-blue-300/40 dark:shadow-blue-900/40 p-8 flex flex-col items-center text-center transform-gpu group-hover:scale-105 group-hover:-rotate-y-1 transition-transform duration-500 mt-20 mb-10">
      <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 dark:text-blue-300 mb-4 drop-shadow-lg animate-fade-in-up" style={{ animationDelay: '200ms' }}>Effortless Event Management</h1>
      <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 animate-fade-in-up" style={{ animationDelay: '400ms' }}>Create, discover, and manage events with a beautiful, intuitive interface.</p>
      <Link 
        to="/create" 
        className="px-8 py-4 font-bold text-white rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 shadow-xl hover:from-blue-700 hover:to-blue-600 border-b-4 border-blue-800 hover:border-blue-700 transition-all duration-200 transform-gpu active:scale-95 active:border-b-2 animate-fade-in-up"
        style={{ animationDelay: '600ms' }}
      >
        Create Your Event
      </Link>
    </div>
    {/* Animated Gradient Circles */}
    <div className="absolute -top-20 -left-20 w-72 h-72 bg-gradient-to-br from-blue-400 to-blue-200 rounded-full blur-3xl opacity-40 animate-pulse" />
    <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-gradient-to-tr from-yellow-200 to-blue-300 rounded-full blur-3xl opacity-30 animate-pulse" />
  </section>
);

export default HeroSection; 