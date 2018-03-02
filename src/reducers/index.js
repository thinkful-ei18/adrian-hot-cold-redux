// IMPORT ACTIONS UP HERE!

const initalState = {
  guesses: [],
  feedback: 'Make your guess!',
  auralStatus: '',
  correctAnswer: Math.round(Math.random() * 100) + 1
}

export const gameReducer = (state=initalState, action) => {
  return state;
}