const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
const connectDB = require('/Users/saisritejpalacharla/Downloads/recipeee/my-react-app/backend/config/db.js'); // Ensure this path is correct

dotenv.config(); // Load environment variables

// Connect to MongoDB
connectDB();

const app = express();
app.use(express.json()); // Middleware to parse JSON bodies

// Test Route
app.get('/', (req, res) => {
    res.send('API is running securely with HTTPS...');
});

// Load SSL Certificate and Key
const httpsOptions = {
    key: fs.readFileSync(path.join(__dirname, 'my-react-app/server.key')),    // Path to your private key
    cert: fs.readFileSync(path.join(__dirname, 'my-react-app/server.cert'))   // Path to your certificate
};

// Define HTTPS Port
const PORT = process.env.PORT || 3000;

// Start HTTPS Server
https.createServer(httpsOptions, app).listen(PORT, () => {
    console.log(`HTTPS Server running on https://localhost:${PORT}`);
});
