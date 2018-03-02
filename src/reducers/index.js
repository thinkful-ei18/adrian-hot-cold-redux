import { GUESS_ADD, RESTART_GAME} from '../actions';
// GUESS_FEEDBACK, GUESS_STATUS, GUESS_CORRECTANSWER, GUESS_NAVIGATION

const initalState = {
  guesses: [],
  feedback: 'Make your guess!',
  // auralStatus: '',
  correctAnswer: Math.round(Math.random() * 100) + 1
}

export const gameReducer = (state=initalState, action) => {


  if (action.type === GUESS_ADD) {

    // do some math for feedback string

    return Object.assign({}, state, {
      guesses: [...state.guesses, action.guess]
    });
  }

  if (action.type === RESTART_GAME) {
    return Object.assign({}, state, {
      correctAnswer: action.correctAnswer,
      guesses: [],
      feedback: 'Make your guess... again!'
    });
  }

  return state;
};