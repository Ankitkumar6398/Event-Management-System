import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setErr("");
    if (password !== confirmPassword) {
      setErr("Passwords do not match");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await res.json();
      if (res.ok) {
        setSuccess(true);
        setTimeout(() => navigate("/login"), 1500);
      } else {
        setErr(data.message || "Signup failed");
      }
    } catch {
      setErr("Server error");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-200 py-12 px-4">
      <div className="w-full max-w-md bg-white/90 rounded-3xl shadow-2xl shadow-blue-200/40 p-10">
        <h1 className="text-3xl font-extrabold text-blue-700 mb-8 text-center drop-shadow">Signup</h1>
        <form className="space-y-6" onSubmit={handleSignup}>
          <div>
            <label className="block text-blue-800 font-semibold mb-1">Name</label>
            <input type="text" value={name} onChange={e => setName(e.target.value)} className="w-full px-4 py-2 rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-400 shadow-sm focus:outline-none" placeholder="Your Name" required />
          </div>
          <div>
            <label className="block text-blue-800 font-semibold mb-1">Email</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full px-4 py-2 rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-400 shadow-sm focus:outline-none" placeholder="you@email.com" required />
          </div>
          <div>
            <label className="block text-blue-800 font-semibold mb-1">Password</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="w-full px-4 py-2 rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-400 shadow-sm focus:outline-none" placeholder="Password" required />
          </div>
          <div>
            <label className="block text-blue-800 font-semibold mb-1">Confirm Password</label>
            <input type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} className="w-full px-4 py-2 rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-400 shadow-sm focus:outline-none" placeholder="Confirm Password" required />
          </div>
          <button type="submit" className="w-full py-3 mt-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white font-bold rounded-full shadow-lg shadow-blue-400/30 hover:from-yellow-400 hover:to-yellow-300 hover:text-blue-900 transition-all duration-300 text-lg" disabled={loading}>
            {loading ? "Signing up..." : "Signup"}
          </button>
          {err && <div className="text-red-500 text-center">{err}</div>}
          {success && <div className="text-green-600 text-center">Signup successful! Redirecting...</div>}
        </form>
      </div>
    </div>
  );
};

export default Signup; 