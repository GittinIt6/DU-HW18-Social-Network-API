const express = require('express');
const db = require('./config/connection'); //connection settings
const routes = require('./routes'); //routes directory
require('dotenv').config(); //for local .env file

//use PORT from env or environment variables, otherwise use 3001
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
