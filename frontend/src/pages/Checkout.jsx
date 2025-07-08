import React, { useState } from "react";

const demoBooking = {
  event: {
    name: "Music Fest 2024",
    date: "2024-07-15",
    location: "Mumbai",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
  },
  ticket: {
    type: "VIP",
    price: 999
  },
  user: {
    name: "Priya Sharma",
    email: "priya@example.com",
    phone: "+91-9876543210"
  }
};

const Checkout = () => {
  const [payment, setPayment] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirmed(true);
  };

  if (confirmed) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 px-4 py-12">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-md w-full text-center">
          <span className="text-5xl mb-4 inline-block">✅</span>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Booking Confirmed!</h2>
          <p className="text-gray-600 mb-4">Thank you for booking your ticket. A confirmation email has been sent to you.</p>
          <div className="mt-6">
            <a href="/dashboard" className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-lg font-semibold shadow hover:from-blue-600 hover:to-purple-600 transition">Go to Dashboard</a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 px-4 py-12">
      <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-lg w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Checkout</h1>
        {/* Event & Ticket Summary */}
        <div className="flex gap-4 mb-6 items-center">
          <img src={demoBooking.event.image} alt={demoBooking.event.name} className="w-24 h-24 object-cover rounded-xl shadow" />
          <div>
            <h2 className="text-xl font-bold text-gray-700">{demoBooking.event.name}</h2>
            <p className="text-gray-600 text-sm">📅 {demoBooking.event.date}</p>
            <p className="text-gray-600 text-sm">📍 {demoBooking.event.location}</p>
            <p className="text-gray-700 font-semibold mt-2">Ticket: {demoBooking.ticket.type} (₹{demoBooking.ticket.price})</p>
          </div>
        </div>
        {/* User Info */}
        <div className="mb-6">
          <h3 className="font-semibold text-gray-700 mb-2">Your Info</h3>
          <p className="text-gray-600 text-sm">{demoBooking.user.name}</p>
          <p className="text-gray-600 text-sm">{demoBooking.user.email}</p>
          <p className="text-gray-600 text-sm">{demoBooking.user.phone}</p>
        </div>
        {/* Payment Options */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <h3 className="font-semibold text-gray-700 mb-2">Payment Method</h3>
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2">
                <input type="radio" name="payment" value="Online" checked={payment === "Online"} onChange={e => setPayment(e.target.value)} required />
                Online Payment
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="payment" value="UPI" checked={payment === "UPI"} onChange={e => setPayment(e.target.value)} />
                UPI
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="payment" value="Card" checked={payment === "Card"} onChange={e => setPayment(e.target.value)} />
                Credit/Debit Card
              </label>
            </div>
          </div>
          <button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 rounded-lg font-semibold shadow-md hover:from-blue-600 hover:to-purple-600 transition">Confirm & Pay</button>
        </form>
      </div>
    </section>
  );
};

export default Checkout; 