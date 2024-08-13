const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the 'build' directory (for React app)
app.use(express.static(path.join(__dirname, 'build')));

// Serve static files from the 'public' directory (for media files, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Handle all other requests by sending back the React app's index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Custom MIME type handling
app.use((req, res, next) => {
  const fileType = path.extname(req.path);
  if (fileType === '.mp4') {
    res.setHeader('Content-Type', 'video/mp4');
  }
  next();
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});