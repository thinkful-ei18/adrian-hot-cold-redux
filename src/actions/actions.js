// adds a guess to guess history
export const GUESS_ADD = 'GUESS_ADD';
export const guessAdd = guess => ({
  type: GUESS_ADD,
  guess
});

// renders feedback to the user
export const GUESS_FEEDBACK =  'GUESS_FEEDBACK';
export const guessFeedback = guess => ({
  type: GUESS_FEEDBACK,
  guess
});

// handles feedback displayed above the guess history counter.
export const GUESS_STATUS = 'GUESS_STATUS';
export const guessStatus = guess => ({
  type: GUESS_STATUS,
  guess
});

// Generates the secret number at beginning of game.
export const GUESS_CORRECTANSWER = 'GUESS_CORRECTANSWER';
export const guessSecret = guess => ({
  type: GUESS_CORRECTANSWER,
  guess
});

// Lets user choose WHAT? or NEW GAME.
export const GUESS_NAVIGATION = 'GUESS_NAVIGATION';
export const guessNavigation = guess => ({
  type: GUESS_NAVIGATION,
  guess
});
