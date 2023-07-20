// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const comments = require('./comments');

// Set up body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set up static assets
app.use(express.static('public'));

// Set up routes
app.get('/comments', (req, res) => {
  res.send(comments);
});

app.post('/comments', (req, res) => {
  const { author, text } = req.body;
  const newComment = { author, text };
  comments.push(newComment);
  res.send(newComment);
});

app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});