import store from './store';
import { guessAdd, restartGame } from './actions';

import React from 'react';
import ReactDOM from 'react-dom';

import './reset.css';
import './index.css';

import Game from './components/game';

console.log('INITIAL STATE:', store.getState());

store.dispatch(guessAdd(50));
store.dispatch(guessAdd(23));
store.dispatch(guessAdd(78));
store.dispatch(restartGame(23));

console.log('NEW STATE:', store.getState());

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
