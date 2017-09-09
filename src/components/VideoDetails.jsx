class VideoDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      views: ''
    };
    this.request((view) => this.setState({views: view}));
  }
  request(callback) {
    $.ajax({
      type: 'GET',
      data: {
        id: this.props.videoId,
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
  render() {
    return <span className="navbar-text">
             {this.state.views} Views
           </span>
  }
}

VideoDetails.propTypes = {
  videoId: React.PropTypes.string.isRequired
};

window.VideoDetails = VideoDetails;
