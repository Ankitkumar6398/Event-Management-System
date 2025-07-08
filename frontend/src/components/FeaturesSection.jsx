import React from "react";

const features = [
  { icon: "📝", title: "Easy Booking", desc: "Book events in just a few clicks." },
  { icon: "💳", title: "Secure Payments", desc: "Your transactions are safe with us." },
  { icon: "⏰", title: "Personalized Reminders", desc: "Never miss an event again." },
  { icon: "🏛️", title: "Venue Details", desc: "Get all the info you need about venues." },
  { icon: "🤝", title: "Vendor Management", desc: "Manage vendors with ease." }
];

const FeaturesSection = () => (
  <section className="py-12 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Why Choose EventEase?</h2>
      <div className="grid gap-8 md:grid-cols-5 sm:grid-cols-2 grid-cols-1">
        {features.map((f, i) => (
          <div key={i} className="flex flex-col items-center bg-white rounded-2xl shadow p-6">
            <span className="text-4xl mb-3">{f.icon}</span>
            <h3 className="text-lg font-bold text-gray-700 mb-1">{f.title}</h3>
            <p className="text-gray-500 text-center text-sm">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection; 