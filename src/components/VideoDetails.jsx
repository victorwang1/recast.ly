class VideoDetails extends React.Component {

  render() {
    return <span className="navbar-text">
             {this.props.views} Views
           </span>
  }
}

VideoDetails.propTypes = {
  views: React.PropTypes.string.isRequired
};

window.VideoDetails = VideoDetails;
