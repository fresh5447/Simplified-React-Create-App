import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FoodData from './data/food';
import FoodFilter from './FoodFilter';

ReactDOM.render(
  <FoodFilter data={FoodData}/>,
  document.getElementById('root')
);
