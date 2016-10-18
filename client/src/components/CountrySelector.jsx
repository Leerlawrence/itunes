var React = require('react');

var CountrySelector = React.createClass({

  handleChange: function(event){
    var newIndex = event.target.value;
    console.log(newIndex);
    this.props.selectCountry(newIndex);
  },



  render: function(){
    var options = this.props.countries.map(function (country, index) {
            return <option value={index} key={index}>{country.name}</option>;

     });

    return(
      <select id="countries" onChange={this.handleChange}>
       {options}
      </select>
    )
  }
})

module.exports = CountrySelector;
