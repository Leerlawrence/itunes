var React = require('react');

var ChartDropDownList = function(props){

  var handleSelect = function(event){
    var genreId = event.target.value
    props.handleSelectedId(genreId);
  }

  var options = [];
  for(var key in props.genres){

    var genreDetails = <option key={key} value={props.genres[key].id}>{props.genres[key].name}</option>
    
    options.push(genreDetails);
  }

  

  console.log(options);

}

module.exports = ChartDropDownList;