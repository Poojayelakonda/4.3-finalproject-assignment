const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB database
mongoose.connect('mongodb://localhost/cricket', { useNewUrlParser: true })
  .then(() => {
    console.log('Connected to MongoDB database');
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB database', error);
  });

// Define routes
app.get('/cricketapi', (req, res) => {
  res.send('Welcome to my API!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});