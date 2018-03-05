import store from './store';
import { guessAdd, restartGame } from './actions';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './reset.css';
import './index.css';

import Game from './components/game';

// console.log('INITIAL STATE:', store.getState());

// store.dispatch(guessAdd('This is not a number!'))
// store.dispatch(guessAdd(50));
// store.dispatch(guessAdd(23));
// store.dispatch(guessAdd(78));
// console.log(store.getState());
// store.dispatch(restartGame(23));

// console.log('NEW STATE:', store.getState());

ReactDOM.render(
  <Provider store={store}>
  <Game />
  </Provider>,
  document.getElementById('root')
);