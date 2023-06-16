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

// userHandler.updateFaveQuote = function (req, res, next) {
//   let {id} = req.params;
//   const data = req.body;

//   User.findByIdAndUpdate(id, {...data, email: req.user.email}, {new: true, overwrite: true})
//     .then(updatedQuote => res.status(200).send(updatedQuote))
//     .catch(err => next(err));
// }

module.exports = userHandler;
