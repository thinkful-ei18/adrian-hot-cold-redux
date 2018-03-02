import store from './store';
import { guessAdd } from './actions';

import React from 'react';
import ReactDOM from 'react-dom';

import './reset.css';
import './index.css';

import Game from './components/game';

console.log('INITIAL STATE:', store.getState());

store.dispatch(guessAdd({guess: 50}));

console.log('NEW STATE:', store.getState());

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
