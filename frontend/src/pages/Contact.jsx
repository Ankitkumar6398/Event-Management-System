import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
      newErrors.email = "Invalid email address.";
    }
    if (!form.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 py-8 px-2 sm:px-4">
      <div className="w-full max-w-2xl mx-auto">
        <div className="relative rounded-3xl shadow-2xl bg-white/30 backdrop-blur-lg border border-white/40 p-8 sm:p-12 flex flex-col items-center glass-card animate-fade-in" style={{boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)', border: '1px solid rgba(255,255,255,0.18)'}}>
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-24 h-24 bg-gradient-to-tr from-blue-400 via-purple-400 to-pink-400 rounded-full blur-2xl opacity-60 z-0 animate-pulse" />
          <h1 className="relative z-10 text-4xl sm:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 drop-shadow-lg text-center">Contact Us</h1>
          <p className="relative z-10 text-lg text-gray-700 mb-8 text-center max-w-md">We'd love to hear from you! Fill out the form below and our team will get back to you soon.</p>
          {submitted && (
            <div className="relative z-10 mb-4 p-3 bg-green-100/80 text-green-700 rounded shadow animate-bounce-in">
              Thank you for contacting us! We'll get back to you soon.
            </div>
          )}
          <form onSubmit={handleSubmit} className="relative z-10 w-full space-y-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-gray-800" htmlFor="name">Name</label>
              <input
                className={`transition-all duration-200 w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/70 shadow-inner text-gray-900 placeholder-gray-400 ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:scale-105`}
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                autoComplete="off"
                placeholder="Your Name"
              />
              {errors.name && <div className="text-red-500 text-sm mt-1">{errors.name}</div>}
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-gray-800" htmlFor="email">Email</label>
              <input
                className={`transition-all duration-200 w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white/70 shadow-inner text-gray-900 placeholder-gray-400 ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:scale-105`}
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                autoComplete="off"
                placeholder="you@email.com"
              />
              {errors.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>}
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-gray-800" htmlFor="message">Message</label>
              <textarea
                className={`transition-all duration-200 w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-pink-400 bg-white/70 shadow-inner text-gray-900 placeholder-gray-400 ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:scale-105`}
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Type your message here..."
              />
              {errors.message && <div className="text-red-500 text-sm mt-1">{errors.message}</div>}
            </div>
            <button
              type="submit"
              className="w-full py-3 mt-2 rounded-xl font-bold text-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-200 active:scale-95 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <style>{`
        .glass-card {
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
          border: 1px solid rgba(255,255,255,0.18);
        }
        @media (max-width: 640px) {
          .glass-card {
            padding: 1.5rem !important;
          }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(40px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s cubic-bezier(0.4,0,0.2,1) both;
        }
        @keyframes bounce-in {
          0% { transform: scale(0.8); opacity: 0; }
          60% { transform: scale(1.05); opacity: 1; }
          100% { transform: scale(1); }
        }
        .animate-bounce-in {
          animation: bounce-in 0.5s cubic-bezier(0.4,0,0.2,1) both;
        }
      `}</style>
    </div>
  );
};

export default Contact; 