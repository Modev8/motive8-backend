'use strict';

const mongoose = require('mongoose');
require('dotenv').config();
const User = require('./Model/user');
const Photo = require('./Model/photo');
mongoose.connect(process.env.MONGODB_URL);

async function seed() {
  const newUser = new User({
    title: 'User 1',
    description: 'New Account',
    email: 'example@email.com',
  });

  await newUser
    .save()
    .then(() => console.log('Saved new user to the DB', typeof newUser))
    .catch((err) => console.error(err));

  await User.create({
    title: 'User2',
    description: 'New Account 2',
    email: 'example2@email.com',
  })
    .then(() => console.log('Saved new user 2 to the DB'))
    .catch((err) => console.error(err));

  const newPhoto = new Photo({
    title: 'Testing',
    description: 'Testing description',
    email: 'photo1@email.com',
  });

  await newPhoto
    .save()
    .then(() => console.log('Saved new photo to the DB', typeof newPhoto))
    .catch((err) => console.error(err));

  await Photo.create({
    title: 'Testing 2',
    description: 'Testing description 2',
    email: 'photo2@email.com',
  })
    .then(() => console.log('Saved new photo 2 to the DB'))
    .catch((err) => console.error(err));

  mongoose.disconnect();
}

seed();
