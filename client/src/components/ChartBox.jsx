var React = require('react');
var CountrySelector = require('./CountrySelector');
var CountryDetail = require('./CountryDetail');

var CountryBox = React.createClass({
  getInitialState:function(){
     return { countries: [], focusCountry: null }
   },


   componentDidMount:function(){
           var url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";
           var request = new XMLHttpRequest();
           request.open("GET", url);
           request.onload = function(){
             if(request.status === 200){
               var data = JSON.parse(request.responseText);
               this.setState({countries: data, focusCountry:data[0]});//added line
             }
           }.bind(this)
           request.send(null);
         },


setFocusCountry: function(index){
  var newCountry= this.state.countries[index];
  this.setState({focusCountry: newCountry});
  console.log(newCountry);
},



  render:function(){
    return(
      <div>
        <h2>Country Box</h2>
        <CountrySelector countries={this.state.countries}
selectCountry={this.setFocusCountry}
        ></CountrySelector>

        <CountryDetail country = {this.state.focusCountry}>country={this.state.CountryDetail}</CountryDetail>
      </div>
    )
  }
})


module.exports = ChartBox;