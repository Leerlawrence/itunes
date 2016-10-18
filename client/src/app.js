
var React = require('react');
var ReactDom = require('react-dom');
var ItunesBox = require('./components/ChartBox');

window.onload = function(){
  ReactDom.render(
    <div>
    <h1>iTunes Top 20 tracks</h1>
    <ItunesBox /> 
    </div>, 
    document.getElementById('app')
  );
}