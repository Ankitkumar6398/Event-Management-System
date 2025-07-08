import React from "react";

const faqs = [
  { q: "How do I book an event?", a: "Browse events, select your ticket, and complete the checkout process." },
  { q: "Can I cancel my booking?", a: "Yes, you can cancel from your dashboard before the event date." },
  { q: "Is my payment secure?", a: "Absolutely! We use secure payment gateways for all transactions." },
  { q: "How do I contact support?", a: "Use the contact form or email us at info@eventease.com." },
  { q: "Can I organize my own event?", a: "Yes, register as an organizer/admin to create and manage events." },
  { q: "What types of events are listed?", a: "Music, corporate, food, sports, weddings, and more!" }
];

const FAQ = () => (
  <section className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-12 px-4">
    <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h1>
      <div className="space-y-6">
        {faqs.map((f, i) => (
          <div key={i} className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl p-4">
            <h2 className="font-semibold text-gray-700 mb-1">Q: {f.q}</h2>
            <p className="text-gray-600">A: {f.a}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FAQ; 