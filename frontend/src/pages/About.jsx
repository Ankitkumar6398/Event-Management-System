import React from "react";

const team = [
  { name: "Ankit Kumar", role: "Founder & CEO", img: "https://randomuser.me/api/portraits/men/11.jpg" },
  { name: "Priya Sharma", role: "Lead Developer", img: "https://randomuser.me/api/portraits/women/68.jpg" },
  { name: "Rahul Verma", role: "Event Manager", img: "https://randomuser.me/api/portraits/men/32.jpg" }
];

const About = () => (
  <section className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-12 px-4">
    <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">About EventEase</h1>
      <p className="text-gray-600 mb-6">EventEase is dedicated to making event management seamless and enjoyable for everyone. Our mission is to empower organizers and delight attendees with a modern, easy-to-use platform for all event needs.</p>
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Our Team</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {team.map((member, i) => (
          <div key={i} className="flex flex-col items-center bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow p-6">
            <img src={member.img} alt={member.name} className="w-20 h-20 rounded-full mb-3 border-4 border-blue-200 object-cover" />
            <h3 className="font-bold text-gray-700 mb-1">{member.name}</h3>
            <p className="text-gray-500 text-center text-sm">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default About; 