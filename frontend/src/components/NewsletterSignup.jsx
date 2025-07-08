import React, { useState } from "react";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Stay Updated!</h2>
        <p className="text-gray-600 mb-6">Subscribe to our newsletter for the latest events and updates.</p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
            className="w-full sm:w-auto px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button type="submit" className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-lg font-semibold shadow-md hover:from-blue-600 hover:to-purple-600 transition">Subscribe</button>
        </form>
        {message && <div className="mt-3 text-green-600">{message}</div>}
      </div>
    </section>
  );
};

export default NewsletterSignup; 