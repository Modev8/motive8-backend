'use strict';

const Photo = require('../Model/photo');
const axios = require('axios');
const photoHandler = {};

class PhotoData {
  constructor(obj){
    this.title = obj.description,
    this.description = obj.alt_description,
    this.imageURL = obj.urls.small,
    this.creator = obj.user.name,
    this.portfolio = obj.user.social.portfolio_url
  }
}

photoHandler.getPhoto = async function (req, res) {
  let searchQuery = req.query.searchQuery;

  let url = `https://api.unsplash.com/search/photos/?client_id=${process.env.UNSPLASH_ACCESS_KEY}&query=${searchQuery}`;
  console.log(url);

  try {
    const photo = await axios.get(url);
    console.log(photo);
    // const photoData = photo.data.results.map((photo) => new Photo(photo));
    const photoResponse = photo.data.results.map((image) => new PhotoData(image));
    console.log(photoResponse);
    // console.log('this is photoData ', photoData);
    // res.status(200).send(photoData);
    res.status(200).send(photoResponse);
  } catch (err) {
    console.error(`${err.message}`);
    res.status(500).send('server error');
  }
};

module.exports = photoHandler;
