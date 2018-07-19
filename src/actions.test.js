import {
  RESTART_GAME,
  restartGame,
  MAKE_GUESS,
  makeGuess,
  generateAuralUpdate,
  GENERATE_AURAL_UPDATE
} from './actions';

describe('makeGuess', () => {
  it('should return the makeGuess action', () => {
    const guess = 9;
    const action = makeGuess(guess);
    expect(action.type).toEqual(MAKE_GUESS);
    expect(action.guess).toEqual(guess);
  });
});

describe('restartGame', () => {
  it('should return the restartGame action', () => {
    const correctAnswer = 34;
    const action = restartGame(correctAnswer);
    expect(action.type).toEqual(RESTART_GAME);
    expect(action.correctAnswer).toEqual(correctAnswer);
  });
});







