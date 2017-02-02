import React from 'react';

var FoodFilter = React.createClass({
  render: function() {
    var food = this.props.data.items.filter(function(item){
      return item.type === 'mexican'
    }).map(function(item){
      return <li> { item.name } </li>
    })
    return (
      <div>
        <h1>  { this.props.data.title } </h1>
        <p> { this.props.data.phone } </p>
        <ul>
          { food }
        </ul>
      </div>
    )
  }
})

export default FoodFilter;
