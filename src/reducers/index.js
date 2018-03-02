import { GUESS_ADD, GUESS_FEEDBACK, GUESS_STATUS, GUESS_CORRECTANSWER, GUESS_NAVIGATION } from '../actions';

const initalState = {
  guesses: [],
  feedback: 'Make your guess!',
  auralStatus: '',
  correctAnswer: Math.round(Math.random() * 100) + 1
}

export const gameReducer = (state=initalState, action) => {
  return state;
}