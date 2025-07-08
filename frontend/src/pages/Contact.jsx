import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h1>
        <p className="text-gray-600 mb-6">Have a question or want to get in touch? Fill out the form below or reach us at <a href="mailto:info@eventease.com" className="text-blue-600 underline">info@eventease.com</a>.</p>
        <div className="grid md:grid-cols-2 gap-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Your Name" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" />
            <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="Your Email" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" />
            <textarea name="message" value={form.message} onChange={handleChange} required placeholder="Your Message" rows={4} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" />
            <button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 rounded-lg font-semibold shadow-md hover:from-blue-600 hover:to-purple-600 transition">Send Message</button>
            {sent && <div className="text-green-600 mt-2">Thank you! Your message has been sent.</div>}
          </form>
          <div className="flex flex-col gap-4 justify-center">
            <div>
              <h2 className="font-semibold text-gray-700 mb-1">Contact Info</h2>
              <p className="text-gray-600 text-sm">Email: info@eventease.com</p>
              <p className="text-gray-600 text-sm">Phone: +91-9876543210</p>
            </div>
            <div>
              <h2 className="font-semibold text-gray-700 mb-1">Follow Us</h2>
              <div className="flex gap-3">
                <a href="#" className="text-blue-600 hover:text-blue-800 text-xl">🐦</a>
                <a href="#" className="text-blue-600 hover:text-blue-800 text-xl">📘</a>
                <a href="#" className="text-blue-600 hover:text-blue-800 text-xl">📸</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 