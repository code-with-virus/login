const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.post('/manual-login', (req, res) => {
  const { username, password, role } = req.body;
  if (role === 'teacher' && username === 'teacher' && password === 'teach123') {
    return res.json({ success: true, message: 'Teacher login successful!' });
  } else if (role === 'admin' && username === 'admin' && password === 'admin123') {
    return res.json({ success: true, message: 'Admin login successful!' });
  } else {
    return res.status(401).json({ success: false, message: 'Invalid credentials!' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
