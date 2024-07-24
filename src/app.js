const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const sanitizeHtml = require('sanitize-html');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

module.exports = app;
