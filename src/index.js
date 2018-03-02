import store from './store';
// IMPORT ACTIONS!!!!
import React from 'react';
import ReactDOM from 'react-dom';

import './reset.css';
import './index.css';

import Game from './components/game';

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
