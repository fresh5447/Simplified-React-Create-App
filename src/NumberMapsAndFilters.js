import React from 'react';
import numbersData from './data/numbers';

var NumberMapsAndFilters = React.createClass({
  render: function() {
    var numberItems = numbersData.filter(function(i){
      return i > 10;
    }).map(function(i){
      return <li> {i} </li>
    })
    return (
      <div>
        <h1>Hello, Number mapping and filtering!!</h1>
        <ul>
          { numberItems }
        </ul>
      </div>
    )
  }
});

export default NumberMapsAndFilters;
