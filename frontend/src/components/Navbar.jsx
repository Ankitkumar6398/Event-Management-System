import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ThemeToggleButton from "./ThemeToggleButton";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const isLoggedIn = Boolean(localStorage.getItem("token"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400 shadow-2xl shadow-blue-300/40 px-4 py-3 fixed w-full z-50 top-0 left-0 transform-gpu">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo/Brand */}
        <div className="text-2xl font-extrabold tracking-tight text-white drop-shadow-lg select-none transform-gpu hover:scale-105 transition-transform duration-300">
          <Link to="/">Event Manager</Link>
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-1">
          <Link to="/" className="relative text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-white/10 transition-all duration-200 transform-gpu hover:-translate-y-0.5">Home</Link>
          <Link to="/events" className="relative text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-white/10 transition-all duration-200 transform-gpu hover:-translate-y-0.5">Events</Link>
          <Link to="/calendar" className="relative text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-white/10 transition-all duration-200 transform-gpu hover:-translate-y-0.5">Calendar</Link>
          {isLoggedIn && <Link to="/create" className="relative text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-white/10 transition-all duration-200 transform-gpu hover:-translate-y-0.5">Create Event</Link>}
          {isLoggedIn && <Link to="/dashboard" className="relative text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-white/10 transition-all duration-200 transform-gpu hover:-translate-y-0.5">Dashboard</Link>}
          {isLoggedIn && <Link to="/my-registrations" className="relative text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-white/10 transition-all duration-200 transform-gpu hover:-translate-y-0.5">My Registrations</Link>}
          {isLoggedIn && <Link to="/profile" className="relative text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-white/10 transition-all duration-200 transform-gpu hover:-translate-y-0.5">Profile</Link>}
          <Link to="/about" className="relative text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-white/10 transition-all duration-200 transform-gpu hover:-translate-y-0.5">About</Link>
          <Link to="/contact" className="relative text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-white/10 transition-all duration-200 transform-gpu hover:-translate-y-0.5">Contact</Link>
        </div>
        <div className="hidden md:flex items-center space-x-2 ml-4">
          {!isLoggedIn && <Link to="/login" className="px-5 py-2 text-sm font-semibold text-white bg-white/10 rounded-lg border-b-2 border-white/20 hover:bg-white/20 transition-all duration-200 transform-gpu active:scale-95">Login</Link>}
          {!isLoggedIn && <Link to="/signup" className="px-5 py-2 text-sm font-semibold text-blue-900 bg-yellow-400 rounded-lg border-b-2 border-yellow-500 hover:bg-yellow-300 transition-all duration-200 transform-gpu active:scale-95">Signup</Link>}
          {isLoggedIn && <button onClick={handleLogout} className="px-5 py-2 text-sm font-semibold text-white bg-red-500 rounded-lg border-b-2 border-red-600 hover:bg-red-400 transition-all duration-200 transform-gpu active:scale-95">Logout</button>}
          {isLoggedIn && (
            <Link to="/profile" className="ml-2 flex items-center justify-center">
              <FaUserCircle className="text-3xl text-white hover:text-yellow-300 transition-colors duration-200" />
            </Link>
          )}
          <ThemeToggleButton />
        </div>
        {/* Hamburger Icon */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded focus:outline-none focus:ring-2 focus:ring-yellow-300 bg-blue-600 shadow-lg shadow-blue-900/30"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white mb-1 rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white mb-1 rounded transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </div>
      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute left-0 w-full bg-gradient-to-br from-blue-700 via-blue-500 to-blue-400 shadow-2xl shadow-blue-300/40 rounded-b-2xl transition-all duration-500 overflow-hidden transform-gpu ${menuOpen ? 'max-h-96 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'}`}
        style={{ top: '100%' }}
      >
        <div className="flex flex-col items-center space-y-3 text-lg font-semibold px-4">
          <Link to="/" className="w-full text-center text-white hover:text-yellow-300 transition-colors duration-200 py-2" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/events" className="w-full text-center text-white hover:text-yellow-300 transition-colors duration-200 py-2" onClick={() => setMenuOpen(false)}>Events</Link>
          <Link to="/calendar" className="w-full text-center text-white hover:text-yellow-300 transition-colors duration-200 py-2" onClick={() => setMenuOpen(false)}>Calendar</Link>
          {isLoggedIn && <Link to="/create" className="w-full text-center text-white hover:text-yellow-300 transition-colors duration-200 py-2" onClick={() => setMenuOpen(false)}>Create Event</Link>}
          {isLoggedIn && <Link to="/dashboard" className="w-full text-center text-white hover:text-yellow-300 transition-colors duration-200 py-2" onClick={() => setMenuOpen(false)}>Dashboard</Link>}
          {isLoggedIn && <Link to="/my-registrations" className="w-full text-center text-white hover:text-yellow-300 transition-colors duration-200 py-2" onClick={() => setMenuOpen(false)}>My Registrations</Link>}
          {isLoggedIn && (
            <Link to="/profile" className="w-full flex justify-center items-center py-2" onClick={() => setMenuOpen(false)}>
              <FaUserCircle className="text-3xl text-white hover:text-yellow-300 transition-colors duration-200" />
            </Link>
          )}
          <Link to="/about" className="w-full text-center text-white hover:text-yellow-300 transition-colors duration-200 py-2" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/contact" className="w-full text-center text-white hover:text-yellow-300 transition-colors duration-200 py-2" onClick={() => setMenuOpen(false)}>Contact</Link>
          <div className="border-t border-white/20 w-full my-2" />
          {!isLoggedIn && <Link to="/login" className="w-full text-center px-4 py-3 rounded-lg bg-white/20 text-white font-semibold hover:bg-yellow-400 hover:text-blue-900 transition" onClick={() => setMenuOpen(false)}>Login</Link>}
          {!isLoggedIn && <Link to="/signup" className="w-full text-center px-4 py-3 rounded-lg bg-yellow-400 text-blue-900 font-semibold hover:bg-yellow-300 transition" onClick={() => setMenuOpen(false)}>Signup</Link>}
          {isLoggedIn && <button onClick={() => { setMenuOpen(false); handleLogout(); }} className="w-full text-center px-4 py-3 rounded-lg bg-red-500 text-white font-semibold hover:bg-red-400 transition">Logout</button>}
          <div className="mt-4 w-full flex justify-center">
             <ThemeToggleButton />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 