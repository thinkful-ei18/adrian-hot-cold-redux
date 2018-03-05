import { GUESS_ADD, RESTART_GAME, UPDATE_AURALSTATUS} from '../actions';
// GUESS_FEEDBACK, GUESS_STATUS, GUESS_CORRECTANSWER, GUESS_NAVIGATION

const initalState = {
  guesses: [],
  feedback: 'Make your guess!',
  auralStatus: '',
  correctAnswer: Math.round(Math.random() * 100) + 1
}

export const gameReducer = (state=initalState, action) => {

  if (action.type === GUESS_ADD) {

    let guess = parseInt(action.guess, 10);

    if (isNaN(guess)) {
      return Object.assign({}, state, {
        feedback: 'Please enter a valid number'
      });
    }

    // do some math for feedback string
    const difference = Math.abs(guess - state.correctAnswer);

    let feedback;

    if (difference >= 50) {
      feedback = 'You\'re Ice Cold...';
    } else if (difference >= 30) {
      feedback = 'You\'re Cold...';
    } else if (difference >= 10) {
      feedback = 'You\'re Warm.';
    } else if (difference >= 1) {
      feedback = 'You\'re Hot!';
    } else {
      feedback = 'You got it!';
    }


    return Object.assign({}, state, {
      guesses: [...state.guesses, guess],
      feedback: feedback
    });
  }

  if (action.type === RESTART_GAME) {
    return Object.assign({}, state, {
      correctAnswer: action.correctAnswer,
      guesses: [],
      feedback: 'Make your guess... again!'
    });
  }

  if (action.type === UPDATE_AURALSTATUS) {

  }

  return state;
};