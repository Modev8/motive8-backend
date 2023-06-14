'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userHandler = require('./Modules/userHandler');
const getVids = require('./Modules/youtubeHandler');

const verifyUser = require('./Modules/Authorize');

const quoteHandler = require('./Modules/quoteHandler');

mongoose.connect(process.env.MONGODB_URL);

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;

mongoose.connect(process.env.MONGODB_URL);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => console.log('Mongoose is connected'));

app.get('/', (req, res) => res.status(200).send('Default route working'));
app.use(verifyUser);

app.get('/user', userHandler.getUser);

app.get('/shorts', getVids);

app.get('/quotes', quoteHandler.getQuotes);
// app.get('/quotes', quoteHandler.addQuote);

app.get('/daily', quoteHandler.getDailyQuote);
app.get('/random', quoteHandler.getRandom);

app.use((err, req, res, next) => res.status(500).send(err.message));

app.listen(PORT, () => console.log(`listening on ${PORT}`));
