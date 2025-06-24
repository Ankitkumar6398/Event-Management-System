import React from "react";

const team = [
  {
    name: "Ankit Thankur",
    role: "Backend Developer",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sahil Thakur",
    role: "UI/UX Designer",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Rahul Singh",
    role: "Frontend Engineer",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
  },
];

const About = () => (
  <div className="w-full min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-100 pb-16">
    {/* Hero Section */}
    <section className="max-w-3xl mx-auto py-20 px-4 text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-4 drop-shadow-lg">About Event Manager</h1>
      <p className="text-lg md:text-xl text-gray-700 mb-6">Empowering communities to connect, create, and celebrate through seamless event management.</p>
      <div className="flex justify-center mt-8">
        <span className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold rounded-lg shadow border-b-4 border-blue-800 hover:from-blue-700 hover:to-blue-600 hover:border-blue-700 transition-all duration-200 transform-gpu active:scale-95 active:border-b-2">Our Mission</span>
      </div>
    </section>
    {/* Mission & Vision */}
    <section className="max-w-4xl mx-auto px-4 mb-20">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center transform-gpu hover:scale-105 hover:-rotate-y-2 transition-all duration-500">
          <h2 className="text-2xl font-bold text-blue-700 mb-2">Our Mission</h2>
          <p className="text-gray-600">To make event management effortless and accessible for everyone, from individuals to organizations, by providing a beautiful, intuitive, and powerful platform.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center transform-gpu hover:scale-105 hover:rotate-y-2 transition-all duration-500">
          <h2 className="text-2xl font-bold text-green-700 mb-2">Our Vision</h2>
          <p className="text-gray-600">To foster vibrant communities and meaningful connections by making it easy to create, discover, and participate in events of all kinds.</p>
        </div>
      </div>
    </section>
    {/* Team Section */}
    <section className="max-w-4xl mx-auto px-4 mb-20">
      <h2 className="text-2xl font-bold text-blue-700 mb-8 text-center">Meet the Team</h2>
      <div className="flex flex-col md:flex-row justify-center gap-10">
        {team.map(member => (
          <div key={member.name} className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center transform-gpu hover:scale-105 hover:-rotate-y-2 transition-all duration-500">
            <img src={member.avatar} alt={member.name} className="w-24 h-24 rounded-full shadow-lg mb-4 border-4 border-blue-100 object-cover" />
            <div className="font-bold text-lg text-blue-800 mb-1">{member.name}</div>
            <div className="text-blue-500 mb-2">{member.role}</div>
          </div>
        ))}
      </div>
    </section>
    {/* Call to Action */}
    <section className="max-w-2xl mx-auto px-4 text-center mt-16">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">Ready to create your next event?</h2>
      <a href="/create" className="inline-block px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold rounded-lg shadow border-b-4 border-blue-800 hover:from-blue-700 hover:to-blue-600 hover:border-blue-700 transition-all duration-200 transform-gpu active:scale-95 active:border-b-2">Get Started</a>
    </section>
    {/* Testimonials Section */}
    <section className="max-w-4xl mx-auto px-4 mb-20">
      <h2 className="text-2xl font-bold text-blue-700 mb-8 text-center">What People Are Saying</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center text-center transform-gpu hover:scale-105 hover:-rotate-y-2 transition-all duration-500">
          <img src="https://randomuser.me/api/portraits/men/12.jpg" alt="User" className="w-16 h-16 rounded-full shadow-lg mb-3 border-4 border-blue-100 object-cover" />
          <p className="text-gray-700 italic mb-2">“The best event platform I've ever used. Super easy and beautiful!”</p>
          <div className="font-bold text-blue-800">Rohit S.</div>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center text-center transform-gpu hover:scale-105 hover:-rotate-y-2 transition-all duration-500">
          <img src="https://randomuser.me/api/portraits/women/22.jpg" alt="User" className="w-16 h-16 rounded-full shadow-lg mb-3 border-4 border-blue-100 object-cover" />
          <p className="text-gray-700 italic mb-2">“Helped our community grow and connect. Highly recommended!”</p>
          <div className="font-bold text-blue-800">Priya V.</div>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center text-center transform-gpu hover:scale-105 hover:-rotate-y-2 transition-all duration-500">
          <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="User" className="w-16 h-16 rounded-full shadow-lg mb-3 border-4 border-blue-100 object-cover" />
          <p className="text-gray-700 italic mb-2">“Organizing events is now a breeze. Love the design!”</p>
          <div className="font-bold text-blue-800">Amit K.</div>
        </div>
      </div>
    </section>
    {/* Partners/Clients Section */}
    <section className="max-w-4xl mx-auto px-4 mb-20">
      <h2 className="text-2xl font-bold text-blue-700 mb-8 text-center">Our Partners</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" className="h-10 grayscale hover:grayscale-0 transition-all duration-300 mx-auto" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png" alt="Meta" className="h-10 grayscale hover:grayscale-0 transition-all duration-300 mx-auto" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-10 grayscale hover:grayscale-0 transition-all duration-300 mx-auto" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix" className="h-10 grayscale hover:grayscale-0 transition-all duration-300 mx-auto" />
      </div>
    </section>
    {/* Newsletter Signup Section */}
    <section className="max-w-2xl mx-auto px-4 mb-20 text-center">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">Stay in the Loop</h2>
      <p className="text-gray-600 mb-6">Subscribe to our newsletter for the latest events and updates.</p>
      <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <input type="email" required placeholder="Your email address" className="px-5 py-3 rounded-lg border border-blue-200 shadow focus:ring-2 focus:ring-blue-400 focus:outline-none w-full sm:w-auto" />
        <button type="submit" className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold rounded-lg shadow border-b-4 border-blue-800 hover:from-blue-700 hover:to-blue-600 hover:border-blue-700 transition-all duration-200 transform-gpu active:scale-95 active:border-b-2">Subscribe</button>
      </form>
    </section>
    {/* FAQ Section */}
    <section className="max-w-3xl mx-auto px-4 mb-20">
      <h2 className="text-2xl font-bold text-blue-700 mb-8 text-center">Frequently Asked Questions</h2>
      <div className="space-y-4">
        <details className="bg-white rounded-2xl shadow p-6 group open:shadow-xl transition-all duration-300">
          <summary className="font-semibold text-blue-700 cursor-pointer outline-none">Is Event Manager free to use?</summary>
          <p className="text-gray-600 mt-2">Yes! You can create and join events for free. Some events may have their own ticket prices.</p>
        </details>
        <details className="bg-white rounded-2xl shadow p-6 group open:shadow-xl transition-all duration-300">
          <summary className="font-semibold text-blue-700 cursor-pointer outline-none">Can I edit or delete my event after publishing?</summary>
          <p className="text-gray-600 mt-2">Absolutely. You can manage your events from your dashboard at any time.</p>
        </details>
        <details className="bg-white rounded-2xl shadow p-6 group open:shadow-xl transition-all duration-300">
          <summary className="font-semibold text-blue-700 cursor-pointer outline-none">How do I contact support?</summary>
          <p className="text-gray-600 mt-2">Use the contact form below or email us at <a href="mailto:support@eventmanager.com" className="text-blue-600 underline">support@eventmanager.com</a>.</p>
        </details>
      </div>
    </section>
    {/* Contact/Support Section */}
    <section className="max-w-2xl mx-auto px-4 mb-20 text-center">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">Contact & Support</h2>
      <p className="text-gray-600 mb-6">Have a question or need help? Fill out the form below and our team will get back to you soon.</p>
      <form className="bg-white rounded-2xl shadow-xl p-8 flex flex-col gap-4">
        <input type="text" required placeholder="Your Name" className="px-5 py-3 rounded-lg border border-blue-200 shadow focus:ring-2 focus:ring-blue-400 focus:outline-none" />
        <input type="email" required placeholder="Your Email" className="px-5 py-3 rounded-lg border border-blue-200 shadow focus:ring-2 focus:ring-blue-400 focus:outline-none" />
        <textarea required placeholder="Your Message" rows="4" className="px-5 py-3 rounded-lg border border-blue-200 shadow focus:ring-2 focus:ring-blue-400 focus:outline-none"></textarea>
        <button type="submit" className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold rounded-lg shadow border-b-4 border-blue-800 hover:from-blue-700 hover:to-blue-600 hover:border-blue-700 transition-all duration-200 transform-gpu active:scale-95 active:border-b-2">Send Message</button>
      </form>
      <div className="text-gray-500 mt-4">Or email us at <a href="mailto:support@eventmanager.com" className="text-blue-600 underline">support@eventmanager.com</a></div>
    </section>
  </div>
);

export default About; 