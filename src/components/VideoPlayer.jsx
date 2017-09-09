class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      views: ''
    }
    this.request(props.video.id.videoId, this.fetchViews.bind(this));
  };

  fetchViews(view) {
    this.setState({views: view});
  }

  request(id, callback) {
    $.ajax({
      type: 'GET',
      data: {
        id: id,
        part: 'statistics',
        key: YOUTUBE_API_KEY
      },
      url: 'https://www.googleapis.com/youtube/v3/videos',
      success: function(data) {
        console.log(data);
        callback(data.items[0].statistics.viewCount);
      },
      error: function(data) {
        console.log('Did not get statistics' + data);
      }
    });
  }

  componentWillReceiveProps(nextProps) {
    this.request(nextProps.video.id.videoId, this.fetchViews.bind(this));
  }

  render() {
    return (<div className="video-player">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={"https://www.youtube.com/embed/" + this.props.video.id.videoId} allowFullScreen></iframe>
      </div>
      <div className="video-player-details">
        <h3>{this.props.video.snippet.title}</h3>
        <VideoDetails views={this.state.views} />
        <div>{this.props.video.snippet.description}</div>
      </div>
    </div>)
  }
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoPlayer.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.VideoPlayer = VideoPlayer;
