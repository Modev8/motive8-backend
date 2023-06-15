'use strict';

const axios = require('axios');
const cache = require('./cache');
const Quote = require('../Model/quote');

const quoteHandler = {};

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

quoteHandler.getZenQuotes = function (req, res, next) {
    const url = `https://zenquotes.io/api/quotes`;
    let date = new Date(Date.now());
    let currentDate = date.toString().split(' ').slice(1, 4);
    //unique identifier for the cache
    const key = 'quotes' + currentDate;
    checkCache(req, res, next, url, key);
};

quoteHandler.getQuotes = function (req, res, next) {
    let queryObject = { email: req.user.email };
    Quote.find(queryObject)
        .then(data => res.status(200).send(data))
        .catch(err => console.error(err));
}


quoteHandler.addQuote = function (req, res, next) {
    const addedQuote = req.body;
    console.log(addedQuote);
    // console.log('req.user shows', req);
    Quote.create({ ...addedQuote, email: req.user.email })
        .then(newQuote => res.status(201).send(newQuote))
        .catch(err => next(err));
}

module.exports = quoteHandler;
