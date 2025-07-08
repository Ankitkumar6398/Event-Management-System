const API_URL = 'http://localhost:5000/api';

async function safeFetch(url, options) {
  try {
    const res = await fetch(url, options);
    return await res.json();
  } catch (error) {
    return { msg: 'Network error: Unable to connect to server.' };
  }
}

export async function register(data) {
  const res = await fetch(`${API_URL}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function login(data) {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
} 