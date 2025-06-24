import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

function getUserFromToken() {
  const token = localStorage.getItem("token");
  if (!token) return null;
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch {
    return null;
  }
}

const Profile = () => {
  const navigate = useNavigate();
  const user = getUserFromToken();

  React.useEffect(() => {
    if (!user) navigate("/login");
  }, [user, navigate]);

  if (!user) return null;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-200 py-12 px-4">
      <div className="w-full max-w-md bg-white/90 rounded-3xl shadow-2xl shadow-blue-200/40 p-10 flex flex-col items-center">
        <div className="relative mb-6">
          <FaUserCircle className="text-7xl text-blue-400 drop-shadow-lg bg-white rounded-full" />
          <span className="absolute bottom-0 right-0 w-5 h-5 bg-green-400 border-2 border-white rounded-full"></span>
        </div>
        <h1 className="text-3xl font-extrabold text-blue-700 mb-2 drop-shadow">User Profile</h1>
        <div className="w-full flex flex-col items-center gap-2 mt-4">
          <div className="w-full bg-blue-50 rounded-xl px-5 py-3 flex items-center justify-between shadow-sm">
            <span className="font-semibold text-blue-900">Name</span>
            <span className="text-blue-700">{user.name || 'N/A'}</span>
          </div>
          <div className="w-full bg-blue-50 rounded-xl px-5 py-3 flex items-center justify-between shadow-sm">
            <span className="font-semibold text-blue-900">Email</span>
            <span className="text-blue-700">{user.email || 'N/A'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile; 