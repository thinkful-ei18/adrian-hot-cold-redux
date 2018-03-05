import React from 'react';

import reducers from '../src/reducers/index';

test('reducers', () => {
  let state;
  state = reducers({guesses:[54],feedback:'You\'re Cold...',auralStatus:'',correctAnswer:7}, {type:'UPDATE_AURALSTATUS'});
  expect(state).toEqual({guesses:[54],feedback:'You\'re Cold...',auralStatus:'Here\'s the status of the game right now: You\'re Cold... You\'ve made 1 guess. It was: 54',correctAnswer:7});
});