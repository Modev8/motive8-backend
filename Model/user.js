'use strict';

const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  title: String,
  description: String,
  email: String,
});

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
