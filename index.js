function noembed(url) {
  console.log("file: index.js ~ line 2 ~ noembed ~ url", url);
  var endpoint = '//noembed.com/embed?';

  if (!!url.length) {
    endpoint += 'url=' + encodeURIComponent(url);
    console.log("file: index.js ~ line 7 ~ noembed ~ endpoint", endpoint);
    return '<div class="noembed-wrapper" data-url="' + endpoint + '">' + url + '</div>';
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
    noembed: noembed,
    video: noembed,
  }
};
