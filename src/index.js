import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import UsersData from './data/users';
import Gravatars from './Gravatars';

ReactDOM.render(
  <Gravatars data={UsersData}/>,
  document.getElementById('root')
);
