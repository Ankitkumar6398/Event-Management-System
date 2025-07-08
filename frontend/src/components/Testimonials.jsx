import React from "react";

const testimonials = [
  {
    name: "Priya Sharma",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    feedback: "EventEase made organizing my conference a breeze! The reminders and booking system are top-notch.",
    rating: 5
  },
  {
    name: "Rahul Verma",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    feedback: "I loved how easy it was to find and register for events. Highly recommended!",
    rating: 4
  },
  {
    name: "Aisha Khan",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    feedback: "The best event platform I've used. Secure payments and great support.",
    rating: 5
  }
];

const Testimonials = () => (
  <section className="py-12 px-4 bg-gradient-to-br from-pink-50 to-blue-50">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">What Our Users Say</h2>
      <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
            <img src={t.photo} alt={t.name} className="w-16 h-16 rounded-full mb-3 border-4 border-blue-200 object-cover" />
            <h3 className="font-bold text-gray-700 mb-1">{t.name}</h3>
            <p className="text-gray-500 text-center text-sm mb-2">"{t.feedback}"</p>
            <div className="flex gap-1">
              {[...Array(t.rating)].map((_, idx) => (
                <span key={idx} className="text-yellow-400 text-lg">★</span>
              ))}
              {[...Array(5 - t.rating)].map((_, idx) => (
                <span key={idx} className="text-gray-300 text-lg">★</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials; 