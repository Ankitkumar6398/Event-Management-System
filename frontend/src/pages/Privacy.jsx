import React from "react";

const PrivacyAndTerms = () => (
  <section className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-12 px-4">
    <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Privacy Policy & Terms</h1>
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">Privacy Policy</h2>
        <p className="text-gray-600 mb-4">Your privacy is important to us. This page explains how we collect, use, and protect your information.</p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>We only collect necessary information for event management and communication.</li>
          <li>Your data is never sold or shared with third parties without your consent.</li>
          <li>All payments are processed securely through trusted gateways.</li>
          <li>You can request data deletion or modification at any time.</li>
        </ul>
      </div>
      <div>
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">Terms & Conditions</h2>
        <p className="text-gray-600 mb-4">By using EventEase, you agree to the following terms and conditions:</p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>All bookings are subject to availability and confirmation.</li>
          <li>Payments are non-refundable except as stated in our cancellation policy.</li>
          <li>Users are responsible for the accuracy of their information.</li>
          <li>EventEase reserves the right to modify or cancel events as needed.</li>
        </ul>
      </div>
    </div>
  </section>
);

export default PrivacyAndTerms; 