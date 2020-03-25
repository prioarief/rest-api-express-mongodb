const express = require('express');
const mongoose = require('mongoose');

const app = express();
require('dotenv/config');

// import routes

const postRoutes = require('./routes/posts');

app.use('/about', postRoutes);

// routes
app.get('/', (req, res) => {
    res.send('We are on home');
})

app.get('/about', (req, res) => {
    res.send('We are on about');
})

// connect db
mongoose.connect(process.env.DB_CONNECTION, {
        useNewUrlParser: true
    },
    () => console.log('connected to db'))


// listening server
app.listen(3000);