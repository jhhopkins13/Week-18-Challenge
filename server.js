const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 27017;

const userRoutes = require('./routes/userRoutes');
const thoughtRoutes = require('./routes/thoughtRoutes');

// Middleware to parse incoming request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/thoughts', thoughtRoutes);

// MongoDB connection setup using Mongoose
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social_network_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

// Log a message when connected to MongoDB
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB!');
});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});

