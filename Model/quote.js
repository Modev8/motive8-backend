'use strict';

const mongoose = require('mongoose');

const { Schema } = mongoose;

const quoteSchema = new Schema({
    quote: String,
    author: String, 
    blockquote: String, 
})

const quoteModel = mongoose.model('Quote', quoteSchema);

module.exports = quoteModel;