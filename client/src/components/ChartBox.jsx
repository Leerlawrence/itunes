var React = require('react');
var HitList = require('./HitList.jsx');
var GenreSelector = require('./GenreSelector.jsx');

var SongBox = React.createClass({
  getInitialState: function(){
    return {songs: [], genres:[]}
  },
  componentDidMount: function(){
    var url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json'
    var request  = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = function(){
      if(request.status === 200){
        var data = JSON.parse(request.responseText);
        this.setState({songs: data.feed.entry});
      }
    }.bind(this)
    request.send();

    var urlGenre = 'https://itunes.apple.com/WebObjects/MZStoreServices.woa/ws/genres?id=34'
    var request  = new XMLHttpRequest();
    request.open('GET', urlGenre);
    request.onload = function(){
      if(request.status === 200){
        var data = JSON.parse(request.responseText);
        // console.log('genreData', data[34].subgenres);
        this.setState({genres: data[34].subgenres});
      }
    }.bind(this)
    request.send();
  },

  render: function(){
    return (
      <div>
      console.log("in chartbox render")
        <h2>iTunes Top 20 Songs</h2>
        <GenreSelector genres={this.state.genres}/>
        <HitList songs={this.state.songs}/>
      </div>
      )
  }
});

module.exports = ChartBox;