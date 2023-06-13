'use strict';

const mongoose = require('mongoose');

const { Schema } = mongoose;

const commentSchema = new Schema({
    comment: String,
    email: String
})

const commentModel = mongoose.model('Quote', quoteSchema);

module.exports = commentModel;