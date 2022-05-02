const { connect, connection } = require('mongoose');
require('dotenv').config();

const connectionString =
  process.env.MONGODB_URI || process.env.DB_CONNECT;

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;