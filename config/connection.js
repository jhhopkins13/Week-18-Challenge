const mongoose = require('mongoose');
require('dotenv').config();

const dbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
};

const connectionString = `mongodb://localhost:27017/${process.env.DB_NAME}`;

mongoose.connect(connectionString, dbOptions)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('Error connecting to MongoDB:', err));

module.exports = mongoose.connection;
