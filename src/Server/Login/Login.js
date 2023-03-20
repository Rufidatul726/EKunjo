const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Middleware to parse JSON request bodies
app.use(express.json());

// Mock user database - in a real app, you would use a database like MongoDB or PostgreSQL
const users = [
  { id: 1, username: 'john', passwordHash: '$2b$10$wkwEoeM7vCEViWpF8hJkVe9X9Mb/Ee1EqiaAjfho57wdJh.bIkzg2' }, // Password: test1234
  { id: 2, username: 'jane', passwordHash: '$2b$10$mU5/b6F.kly6omZ6QX9o0e0wj3IC/R4ab08yDw5E/x44lU6BG5S6S' }, // Password: 1234test
];

// Endpoint to handle login requests
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  // Find the user with the given username
  const user = users.find((u) => u.username === username);

  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  // Check the password against the stored hash
  const match = await bcrypt.compare(password, user.passwordHash);

  if (!match) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  // Generate a JWT token with the user's ID as the payload
  const token = jwt.sign({ userId: user.id }, 'secret');

  // Return the token to the client
  res.json({ token });
});

// Middleware to authenticate requests with a JWT token
const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: 'Authentication required' });
  }

  const token = authHeader.split(' ')[1];

  try {
    // Verify the token and extract the payload (user ID)
    const payload = jwt.verify(token, 'secret');
    req.userId = payload.userId;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

// Example protected endpoint - only accessible with a valid JWT token
app.get('/api/protected', authenticate, (req, res) => {
  res.json({ message: `Hello, user ${req.userId}!` });
});

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
