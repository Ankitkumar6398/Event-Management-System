import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => (
  <section className="relative flex flex-col items-center justify-center min-h-[60vh] py-12 px-4 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 overflow-hidden">
    <div className="absolute inset-0 flex justify-center items-center opacity-10 pointer-events-none select-none">
      <span className="text-[10rem] md:text-[16rem]">🎊</span>
    </div>
    <div className="relative z-10 max-w-2xl text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">Plan, Manage & Enjoy Your Events Seamlessly!</h1>
      <p className="text-lg md:text-xl text-gray-600 mb-8">All-in-one platform for event creation, booking, reminders, and more. Make every event memorable with EventEase.</p>
      <Link to="/register" className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold shadow-md hover:from-blue-600 hover:to-purple-600 transition">Get Started</Link>
    </div>
  </section>
);

export default HeroSection; 