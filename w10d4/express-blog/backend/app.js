const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// app.use(cors())

// UHOH PROBLEM WITH CORS
// https://expressjs.com/en/resources/middleware/cors.html
// axios.get("http://localhost:3000/api/v1/authors") OK!

// CORS => Poke from another host / to another host
// CORS => CLIENT TO CLIENT issue

const authorsRouter = require('./routes/v1/authors');
const postsRouter = require('./routes/v1/posts');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/v1/authors', authorsRouter);
app.use('/api/v1/posts', postsRouter);

module.exports = app;
