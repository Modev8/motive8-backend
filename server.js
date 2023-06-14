'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userHandler = require('./Modules/userHandler');
const getVids = require('./Modules/youtubeHandler');

const verifyUser = require('./Modules/Authorize');

mongoose.connect(process.env.MONGODB_URL);

const photoHandler = require('./Modules/PhotoHandler');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => console.log('Mongoose is connected'));

// app.use(verifyUser);

app.get('/user', userHandler.getUser);

app.get('/photos', photoHandler.getPhoto);

app.get('/shorts', getVids);

app.get('/', (req, res) => res.status(200).send('Default route working'));

app.get('/quotes', quoteHandler.getQuotes);
<<<<<<< HEAD
app.post('/quotes', quoteHandler.addQuote);
=======
app.get('/quotes', quoteHandler.addQuote);
>>>>>>> 7ec6c0cdbf03704046545ceb74608f604ddd2bc3

app.get('/daily', quoteHandler.getDailyQuote);
app.get('/random', quoteHandler.getRandom);

app.use((err, req, res, next) => res.status(500).send(err.message));

app.listen(PORT, () => console.log(`listening on ${PORT}`));
