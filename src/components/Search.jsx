var Search = (props) => {

  return <form className="search-bar form-inline" onSubmit={function(e) {
          e.preventDefault();
          var query = {
            key: YOUTUBE_API_KEY,
            query: $('.form-control').val(),
            max: 5
          }
          searchYouTube(query, props.handleSearch);
      }}>
    <input className="form-control" type="text" />
    <button className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </form>
};


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
