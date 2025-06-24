export function isAdminAuthenticated() {
  const token = localStorage.getItem('token');
  if (!token) return false;
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.isAdmin && Date.now() / 1000 < payload.exp;
  } catch {
    return false;
  }
} 