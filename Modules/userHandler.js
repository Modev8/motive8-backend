'use strict';

const User = require('../Model/user');

const userHandler = {};

userHandler.getUser = function (req, res, next) {
  console.log('Testing get!');
  let queryObject = {};
  User.find(queryObject)
    .then((data) => res.status(200).send(data))
    .catch((err) => next(err));
};

module.exports = userHandler;
