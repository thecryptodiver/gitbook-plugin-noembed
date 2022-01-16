const axios = require('axios');

async function noembed(url) {
  console.log("file: index.js ~ line 2 ~ noembed ~ url", url);
  var endpoint = '//noembed.com/embed?';

  if (!!url.length) {
    endpoint += 'url=' + encodeURIComponent(url);
    try {
      const data = await axios.get(endpoint);
      console.log("file: index.js ~ line 10 ~ noembed ~ data", data);
      if (data) {
        return data?.html || "Hello, not here";
      }
      return "Hello URL";
    } catch (e) {
      console.log("file: index.js ~ line 17 ~ noembed ~ e", e);
      return "Hello error";
    }
  }

  return url;
}

module.exports = {
  website: {
    assets: './assets',
    js: ['scripts.js'],
    css: ['style.css']
  },
  filters: {
    embed: noembed
  }
};
