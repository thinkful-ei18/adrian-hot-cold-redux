import store from './store';
import { GUESS_ADD } from './actions';

import React from 'react';
import ReactDOM from 'react-dom';

import './reset.css';
import './index.css';

import Game from './components/game';

console.log('INITIAL STATE:', store.getState());
// store.dispatch(GUESS_ADD({guess: 0}));

console.log(store.getState());

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
