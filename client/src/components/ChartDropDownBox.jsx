var React = require('react');
var ChartDropDownList = require('./ChartDropDownList');

var ItunesDropDown = React.createClass({
  getInitialState: function(){
    return {genres: []};
  },

  componentDidMount: function(){
    var request = new XMLHttpRequest();
    var url = "https://itunes.apple.com/WebObjects/MZStoreServices.woa/ws/genres?id=34"
    request.open("GET", url);
    request.onload = function(){
      var data = JSON.parse(request.responseText);
      this.setState({genres: data[34].subgenres});

    }.bind(this);
    request.send();
  },

  handleSelect: function(genreId){
    this.props.handleGenreSelect(genreId);
  },

  render: function(){
    return (
      <div>
        <ChartDropDownList genres={this.state.genres} handleSelectedId={this.handleSelect} />
      </div>
    )
  }
});

module.exports = ChartDropDown;