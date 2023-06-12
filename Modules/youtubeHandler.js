'use strict';

const axios = require('axios');
const cache = require('./cache');

class YoutubeData {
  constructor(obj) {
    this.name = obj.snippet.title;
    this.description = obj.snippet.description;
    this.content = obj.snippet.thumbnails.default;
  }
}

function getVids(req,res,next) {
  const{motivation} = req.query;
  const key = 'user motivation' + motivation;
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=motivation for ${motivation}&maxResults=10&key=${process.env.YOUTUBE_API_KEY}`;

  cache[key] && (Date.now() - cache[key].timestamp < 86400 )
    ? res.status(200).send(cache[key])
    : axios.get(url)
      .then(res => res.data.items.map(v => new YoutubeData(v)))
      .then(formattedData => {
        cache[key] = {};
        cache[key] = {
          data: formattedData,
          timestamp: Date.now()
        };
        console.log('from cache',cache[key]);
        res.status(200).send({
          data: formattedData,
          timestamp: cache[key].timestamp
        });
      })
      .catch(err => next(err));
}

module.exports = getVids;
