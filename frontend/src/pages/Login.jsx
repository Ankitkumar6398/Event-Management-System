import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setErr('');
    setLoading(true);
    try {
      const res = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (res.ok) {
        localStorage.setItem('token', data.token);
        navigate('/');
      } else {
        setErr(data.message || 'Login failed');
      }
    } catch {
      setErr('Server error');
    }
    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto py-20 px-4">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Login</h1>
      <form onSubmit={handleLogin} className="bg-white rounded-2xl shadow-xl p-8 flex flex-col gap-4">
        <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="px-5 py-3 rounded-lg border border-blue-200 shadow" required />
        <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" className="px-5 py-3 rounded-lg border border-blue-200 shadow" required />
        <button type="submit" className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold rounded-lg shadow disabled:opacity-60" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
        {err && <div className="text-red-500">{err}</div>}
      </form>
      <div className="mt-4 text-center">
        Need an account? <Link to="/signup" className="text-blue-600 underline">Register</Link>
      </div>
    </div>
  );
};

export default Login; 