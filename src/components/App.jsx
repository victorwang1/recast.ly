class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: exampleVideoData,
      currentVideo: exampleVideoData[0]
    };
  }
  handleSearch(data) {
    if (data.length) {
      this.setState({data: data});
      this.setState({currentVideo: data[0]});
    }
  }
  handleClick(video) {
    this.setState({currentVideo: video});
  }
  render() {return <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <Search handleSearch={this.handleSearch.bind(this)}/>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo} />
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.data} handleClick={this.handleClick.bind(this)} />
        </div>
      </div>
    </div>
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
