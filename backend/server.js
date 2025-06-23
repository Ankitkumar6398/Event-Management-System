require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const ADMIN_USER = { username: 'admin', password: 'admin123' }; // Demo only!
const JWT_SECRET = process.env.JWT_SECRET || 'supersecretkey';

// Login endpoint
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  if (username === ADMIN_USER.username && password === ADMIN_USER.password) {
    const token = jwt.sign({ username, isAdmin: true }, JWT_SECRET, { expiresIn: '2h' });
    return res.json({ token });
  }
  res.status(401).json({ message: 'Invalid credentials' });
});

// Middleware to protect admin routes
function adminAuth(req, res, next) {
  const auth = req.headers.authorization;
  if (!auth) return res.status(401).json({ message: 'No token' });
  const token = auth.split(' ')[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    if (!decoded.isAdmin) throw new Error();
    req.user = decoded;
    next();
  } catch {
    res.status(403).json({ message: 'Forbidden' });
  }
}

// Example protected admin route
app.get('/api/admin-data', adminAuth, (req, res) => {
  res.json({ message: 'This is protected admin data.' });
});

app.listen(5000, () => console.log('Backend running on http://localhost:5000')); 