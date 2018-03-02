export const GUESS_ADD = 'GUESS_ADD';
export const guessAdd = guess => ({
  type: GUESS_ADD,
  guess
});

export const GUESS_FEEDBACK =  'GUESS_FEEDBACK';
export const guessFeedback = guess => ({
  type: GUESS_FEEDBACK,
  guess
});

export const GUESS_STATUS = 'GUESS_STATUS';
export const guessStatus = guess => ({
  type: GUESS_STATUS,
  guess
});

export const GUESS_SECRET = 'GUESS_SECRET';
export const guessSecret = guess => ({
  type: GUESS_SECRET,
  guess
});