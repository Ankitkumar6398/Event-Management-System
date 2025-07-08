import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between py-3 px-4 md:px-8">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-extrabold text-blue-600">🎟️ EventEase</span>
        </div>
        <ul className="hidden md:flex gap-6 text-gray-700 font-semibold">
          <li><Link to="/" className="hover:text-blue-600 transition">Home</Link></li>
          <li><Link to="/events" className="hover:text-blue-600 transition">Events</Link></li>
          <li><Link to="/about" className="hover:text-blue-600 transition">About Us</Link></li>
          <li><Link to="/contact" className="hover:text-blue-600 transition">Contact Us</Link></li>
          <li><Link to="/login" className="hover:text-blue-600 transition">Login/Register</Link></li>
        </ul>
        {/* Language Switcher Placeholder */}
        <div className="hidden md:block ml-4">
          <button className="text-gray-500 hover:text-blue-600">🌐</button>
        </div>
        {/* Mobile menu (hamburger) */}
        <div className="md:hidden">
          <button className="text-2xl text-blue-600">☰</button>
        </div>
        <div className="flex items-center gap-4">
          {user ? (
            <>
              <span>Welcome, {user.email} ({user.role})</span>
              <button onClick={handleLogout} className="bg-white text-blue-600 px-3 py-1 rounded">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:underline">Login</Link>
              <Link to="/register" className="hover:underline">Register</Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar; 