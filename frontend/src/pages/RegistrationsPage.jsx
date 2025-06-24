import React from 'react';
import { useParams, Link } from 'react-router-dom';
import allRegistrations from '../data/registrations';
import allEvents from '../data/events';

const RegistrationsPage = () => {
  const { id } = useParams();
  const eventId = parseInt(id, 10);

  const event = allEvents.find(e => e.id === eventId);
  const registrations = allRegistrations.filter(r => r.eventId === eventId);

  if (!event) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold">Event not found.</h1>
        <Link to="/dashboard" className="text-blue-500 hover:underline">Back to Dashboard</Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 min-h-screen">
      <div className="bg-white rounded-2xl shadow-2xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Registrations for <span className="text-blue-600">{event.title}</span></h1>
        <p className="text-gray-500 mb-8">A total of {registrations.length} people have registered for this event.</p>
        
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Attendee Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tickets</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {registrations.length > 0 ? (
                registrations.map(reg => (
                  <tr key={reg.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{reg.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{reg.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{reg.tickets}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="px-6 py-10 text-center text-gray-500">No registrations found for this event.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="mt-8 text-center">
          <Link to="/dashboard" className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg font-semibold shadow-md border-b-4 border-blue-800 hover:from-blue-700 hover:to-blue-600 hover:border-blue-700 transition-all duration-200 transform-gpu active:scale-95 active:border-b-2">
            Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegistrationsPage; 