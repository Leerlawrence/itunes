var React = require('react');
var ItunesList = require('./ChartList');
var ItunesDropDown = require('./ChartDropDownBox');


var ItunesBox = React.createClass({
  getInitialState: function(){
    return {tracks: []}
  },

  handleUrlUpdate: function(genreId){
    var newUrl = "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre="+genreId+"/json"
    this.makeRequest(newUrl)
  },

  makeRequest: function(url){
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = function(){
      var data = JSON.parse(request.responseText);
      this.setState({tracks: data.feed.entry});
      console.log("entry", data.feed.entry);
    }.bind(this);
    request.send();
  },

  componentDidMount: function(){
    var request = new XMLHttpRequest();
    request.open("GET", "https://itunes.apple.com/gb/rss/topsongs/limit=20/json");
    request.onload = function(){
      var data = JSON.parse(request.responseText);
      this.setState({tracks: data.feed.entry});
      console.log("entry", data.feed.entry);
    }.bind(this);
    request.send();
  },

  render: function(){
    return(
      <div>
        <ItunesDropDown handleGenreSelect={this.handleUrlUpdate}/>
        <ItunesList tracks={this.state.tracks}/>
      </div>
    )
  }

});

module.exports = ChartBox;