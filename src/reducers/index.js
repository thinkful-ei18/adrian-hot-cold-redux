import { GUESS_ADD} from '../actions';
// GUESS_FEEDBACK, GUESS_STATUS, GUESS_CORRECTANSWER, GUESS_NAVIGATION

const initalState = {
  guesses: [],
  feedback: 'Make your guess!',
  auralStatus: '',
  correctAnswer: Math.round(Math.random() * 100) + 1
}

export const gameReducer = (state=initalState, action) => {

  if (action.type === GUESS_ADD) {
    return Object.assign({}, state, {
      guesses: [...state.guesses, action.item]
    });
  }

  return state;
};