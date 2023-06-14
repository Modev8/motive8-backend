'use strict';

const mongoose = require('mongoose');

const { Schema } = mongoose;

const photoSchema = new Schema({
  title: String,
  description: String,
  email: String,
});

const photoModel = mongoose.model('Photo', photoSchema);

module.exports = photoModel;
