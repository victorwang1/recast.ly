var searchYouTube = (options, callback) => {
  $.ajax({
    type: 'GET',
    data: {
      q: options.query,
      part: 'snippet',
      key: options.key,
      maxResults: options.max,
      type: 'video',
      videoEmbeddable: 'true'
    },
    url: 'https://www.googleapis.com/youtube/v3/search',
    success: function(data) {
      callback(data.items);
    },
    error: function(data) {
      console.log('OHHH NO' + data);
    }
  })
};

searchYouTube = _.throttle(searchYouTube, 2000, true);

window.searchYouTube = searchYouTube;
