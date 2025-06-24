import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Events from "./pages/Events";
import CreateEditEvent from "./pages/CreateEditEvent";
import Contact from "./pages/Contact";
import EventDetails from "./pages/EventDetails";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import EventRegistration from "./pages/EventRegistration";
import CalendarView from "./pages/CalendarView";
import ScrollToTopButton from "./components/ScrollToTopButton";
import { ThemeProvider } from "./context/ThemeContext";
import RegistrationsPage from "./pages/RegistrationsPage";
import MyRegistrations from "./pages/MyRegistrations";
import AdminPanel from "./pages/AdminPanel";
import AdminRegister from "./pages/AdminRegister";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <div className="pt-16 bg-white dark:bg-gray-900 transition-colors duration-300">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/:id" element={<EventDetails />} />
            <Route path="/create" element={<ProtectedRoute><CreateEditEvent /></ProtectedRoute>} />
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/register/:id" element={<ProtectedRoute><EventRegistration /></ProtectedRoute>} />
            <Route path="/calendar" element={<CalendarView />} />
            <Route path="/registrations/:id" element={<ProtectedRoute><RegistrationsPage /></ProtectedRoute>} />
            <Route path="/my-registrations" element={<ProtectedRoute><MyRegistrations /></ProtectedRoute>} />
            <Route path="/admin" element={<ProtectedRoute><AdminPanel /></ProtectedRoute>} />
            <Route path="/admin-register" element={<AdminRegister />} />
            <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          </Routes>
        </div>
        <ScrollToTopButton />
      </Router>
    </ThemeProvider>
  );
}

export default App;
