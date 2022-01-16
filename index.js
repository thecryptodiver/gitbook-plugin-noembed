const axios = require('axios');

async function noembed(url) {
  console.log("file: index.js ~ line 2 ~ noembed ~ url", url);
  var endpoint = 'https://noembed.com/embed?';

  if (!!url.length) {
    endpoint += 'url=' + url;
    return axios.get(endpoint)
      .then(function (response) {
        console.log(JSON.stringify(response));
        return "Hello URL;"
      })
      .catch(function (error) {
        console.log(JSON.stringify(error));
        return "Hello error;"
      })
      .then(function () {
        console.log("Here123");
        return "Hello end;"
      });  
      // const data = await axios.get(endpoint);
      // console.log("file: index.js ~ line 10 ~ noembed ~ data", data);
      // if (data) {
      //   return data?.html || "Hello, not here";
      // }
      // return "Hello URL";
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
