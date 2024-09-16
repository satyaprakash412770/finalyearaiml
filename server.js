const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

// Initialize express app
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection (Replace 'your_mongodb_connection_string' with your actual MongoDB connection string)
mongoose.connect('your_mongodb_connection_string', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

// Simple GET route to test if the server is running
app.get('/', (req, res) => {
    res.send('Server is running');
});

// Start server on port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
