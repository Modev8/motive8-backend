'use strict';

const axios = require('axios');
const cache = require('./cache');

const Quote = require('../Model/quote');

const quoteHandler = {};

// const monthKey = {
//     Jan: '01',
//     Feb: '02',
//     Mar: '03',
//     Apr: '04',
//     May: '05',
//     Jun: '06',
//     Jul: '07',
//     Aug: '08',
//     Sep: '09',
//     Oct: '10',
//     Nov: '11',
//     Dec: '12'
// }

class QuoteData {
    constructor(obj) {
        this.quote = obj.q;
        this.author = obj.a;
        this.blockquote = obj.h;
    }
}

//checking if cache with key exists, 86400000 is number of milliseconds in 24 hours
function checkCache(req, res, next, url, key) {
    cache[key] && (Date.now() - cache[key].timestamp < 86400000)
        ? res.status(200).send(cache[key])
        : axios.get(url)
            .then(response => response.data.map(quote => new QuoteData(quote)))
            .then(formattedData => {
                cache[key] = {};
                cache[key] = {
                    data: formattedData,
                    timestamp: Date.now()
                };
                // console.log('from cache', cache[key]);
                res.status(200).send(cache[key]); //removed .data[0]
            })
            .catch(error => next(error));
}

quoteHandler.getQuotes = function (req, res, next) {

    const url = `https://zenquotes.io/api/quotes`;

    let date = new Date(Date.now());
    let currentDate = date.toString().split(' ').slice(1, 4);
    // let formattedDate = currentDate[2] + '-' + monthKey[currentDate[0]] + '-' + currentDate[1];

    //unique identifier for the cache
    const key = 'quotes' + currentDate;

    checkCache(req, res, next, url, key);
}

quoteHandler.getDailyQuote = function (req, res, next) {
    const url = `https://zenquotes.io/api/today`;

    let date = new Date(Date.now());
    let currentDate = date.toString().split(' ').slice(1, 4);
    // let formattedDate = currentDate[2] + '-' + monthKey[currentDate[0]] + '-' + currentDate[1];
    // console.log(formattedDate);

    //unique identifier for the cache
    const key = 'daily quote' + currentDate;

    checkCache(req, res, next, url, key);
}

quoteHandler.getRandom = function (req, res, next) {
    const url = `https://zenquotes.io/api/random`;

    let date = new Date(Date.now());
    let currentDate = date.toString().split(' ').slice(1, 4);
    // let formattedDate = currentDate[2] + '-' + monthKey[currentDate[0]] + '-' + currentDate[1];
    // console.log(formattedDate);

    //unique identifier for the cache
    const key = 'random quote' + currentDate;

    checkCache(req, res, next, url, key);
}

quoteHandler.addQuote = function (req, res, next) {
    const newQuote = req.body;
    console.log('req.user shows', req);
    console.log(newQuote);
    Quote.create({...newQuote, email: req.user.email })
        .then(addedQuote => res.status(201).send(addedQuote))
        .catch(err => next(err));
}


module.exports = quoteHandler;