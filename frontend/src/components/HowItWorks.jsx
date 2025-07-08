import React from "react";

const steps = [
  { icon: "🔍", title: "Browse Events", desc: "Explore a variety of events tailored for you." },
  { icon: "🎟️", title: "Book Tickets", desc: "Secure your spot with easy booking." },
  { icon: "✅", title: "Get Confirmation", desc: "Receive instant confirmation and reminders." },
  { icon: "🎉", title: "Attend & Enjoy!", desc: "Show up and have a great time!" }
];

const HowItWorks = () => (
  <section className="py-12 px-4 bg-white">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">How It Works</h2>
      <div className="grid gap-8 md:grid-cols-4 sm:grid-cols-2 grid-cols-1">
        {steps.map((s, i) => (
          <div key={i} className="flex flex-col items-center bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow p-6">
            <span className="text-4xl mb-3">{s.icon}</span>
            <h3 className="text-lg font-bold text-gray-700 mb-1">{s.title}</h3>
            <p className="text-gray-500 text-center text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks; 