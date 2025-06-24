import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const AdminRegister = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [err, setErr] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setErr('');
    setSuccess('');
    if (!username || !password || !confirm) {
      setErr('All fields are required');
      return;
    }
    if (password !== confirm) {
      setErr('Passwords do not match');
      return;
    }
    setLoading(true);
    try {
      const res = await fetch('http://localhost:5000/api/register-admin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (res.ok) {
        setSuccess('Admin registered! Redirecting to login...');
        setTimeout(() => navigate('/login'), 1500);
      } else {
        setErr(data.message || 'Registration failed');
      }
    } catch {
      setErr('Server error');
    }
    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto py-20 px-4">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Admin Registration</h1>
      <form onSubmit={handleRegister} className="bg-white rounded-2xl shadow-xl p-8 flex flex-col gap-4">
        <input value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" className="px-5 py-3 rounded-lg border border-blue-200 shadow" required />
        <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" className="px-5 py-3 rounded-lg border border-blue-200 shadow" required />
        <input value={confirm} onChange={e => setConfirm(e.target.value)} type="password" placeholder="Confirm Password" className="px-5 py-3 rounded-lg border border-blue-200 shadow" required />
        <button type="submit" className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold rounded-lg shadow disabled:opacity-60" disabled={loading}>
          {loading ? 'Registering...' : 'Register'}
        </button>
        {err && <div className="text-red-500">{err}</div>}
        {success && <div className="text-green-600">{success}</div>}
      </form>
      <div className="mt-4 text-center">
        Already have an account? <Link to="/login" className="text-blue-600 underline">Login</Link>
      </div>
    </div>
  );
};

export default AdminRegister; 