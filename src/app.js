const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const sanitizeHtml = require('sanitize-html');
const dotenv = require('dotenv');

//Rutas
const loginRouter = require('./routes/login.routes');
const userRouter = require('./routes/user.routes');

dotenv.config();

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());

// Routes
const apiRouter = process.env.APIROUTER
app.get('/', (req, res) => {
    res.send('API is running...');
});
app.use(apiRouter, loginRouter);
app.use(apiRouter, userRouter);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

module.exports = app;
