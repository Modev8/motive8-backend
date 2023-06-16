'use strict';

const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  email: String,
  faveQuote: String
});

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
