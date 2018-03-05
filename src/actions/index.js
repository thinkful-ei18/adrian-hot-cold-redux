// adds a guess to guess history
export const ADD_GUESS = 'ADD_GUESS';
export const addGuess = guess => ({
  type: ADD_GUESS,
  guess
});

// Lets user choose NEW GAME.
export const RESTART_GAME = 'RESTART_GAME';
export const restartGame = correctAnswer => ({
  type: RESTART_GAME,
  correctAnswer
});

export const UPDATE_AURALSTATUS = 'UPDATE_AURALSTATUS';
export const updateAuralStatus = auralStatus => ({
  type: UPDATE_AURALSTATUS,
  auralStatus
});