import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 py-8 px-4 mt-12">
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex flex-col items-center md:items-start">
        <span className="text-2xl font-extrabold text-blue-600 mb-2">🎟️ EventEase</span>
        <p className="text-gray-600 text-sm mb-2">Contact: info@eventease.com</p>
        <div className="flex gap-3 mb-2">
          <a href="#" className="text-blue-600 hover:text-blue-800 text-xl">🐦</a>
          <a href="#" className="text-blue-600 hover:text-blue-800 text-xl">📘</a>
          <a href="#" className="text-blue-600 hover:text-blue-800 text-xl">📸</a>
        </div>
      </div>
      <div className="flex flex-col items-center md:items-end gap-2">
        <Link to="/privacy" className="text-gray-600 hover:text-blue-600 text-sm">Privacy Policy & Terms</Link>
        <Link to="/faqs" className="text-gray-600 hover:text-blue-600 text-sm">FAQs</Link>
      </div>
    </div>
    <div className="text-center text-gray-400 text-xs mt-6">&copy; {new Date().getFullYear()} EventEase. All rights reserved.</div>
  </footer>
);

export default Footer; 