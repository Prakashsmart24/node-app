const express = require('express');
const mongoose = require('mongoose');
const postRoutes = require('./routes/post-routes')
// const bodyParser = require('body-parser');

const app = express();
mongoose
  .connect('mongodb+srv://Praki:12345@cluster0.sp42fy1.mongodb.net/?appName=Cluster0')
  .then(() => {
    console.log('connect to data base');
  });


app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Allow specific HTTP methods
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');

  // Allow specific headers from the frontend request
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization',
  );

  next();
});


app.use('/api/post',postRoutes);
module.exports = app;
