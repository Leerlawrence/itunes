var React = require('react');


var CountryDetail = React.createClass({
      render:function(){
        if(!this.props.country){return <h4> No Country Selected </h4>}
        return(<div>
          <h4> {this.props.country.name} </h4>
          <h3>{this.props.country.population} </h3>
          <h2>{this.props.country.capital}</h2>
          </div>
          )
        }
      })



var CountryDetail2 = function(props){
  
  if(!props.country){
    return <h3>No country</h3>
  }
  return(
    <h3>
    {props.country.name}
    </h3> //there may be more in the return depending on when this lesson is done
    )
  
}

// var CountryDetail = function(props){
// if(!props.Country) return <h3>No country selected</h3>;
//   return(<div>
//             <h4> {this.props.country.name} </h4>
//             <h3>{this.props.country.population} </h3>
//             <h2>{this.props.country.capital}</h2>
//             </div>
//             )
// }

// var myComponent=function(props){return <h1>{props.title}</h1>}




module.exports = CountryDetail;

