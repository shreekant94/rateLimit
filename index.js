const express = require('express');
const rateLimit = require('express-rate-limit');
const cors = require('cors');
const quotes = require('./quotes.json');

const app = express();

// Enable CORS for all origins
app.use(cors());

// Rate limiting: 5 requests per minute per client
const limiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minute
    max: 5, // 5 requests per minute
    message: {
        error: "Too many requests. Please try again after a minute."
    }
});
app.use(limiter);

// Endpoint to get a random quote
app.get('/api/quote', (req, res) => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const { id, text, author } = quotes[randomIndex]; // Exclude the 'type' field
    res.json({ id, text, author });
});

// Catch-all route for 404 errors
app.use((req, res) => {
    res.status(404).json({ error: "Endpoint not found." });
});

// Export the app for Vercel
module.exports = app;
