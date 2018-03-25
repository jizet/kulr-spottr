import BoardActions, {startGame as startGameReducer, levelUp as levelUpReducer, finishGame as finishGameReducer } from '../../redux/BoardRedux'
import Immutable from 'seamless-immutable'

const INITIAL_STATE = Immutable({
  currentLevel: 0,
  gameStatus: 'waiting'
})

const PLAYING_STATE = Immutable({
  currentLevel: 0,
  gameStatus: 'playing'
})

describe('Start game reducer', () => {
  it('should return initial state', () => {
    expect(startGameReducer(undefined, {})).toEqual(INITIAL_STATE)
  });
  it('should handle start game', () => {
    expect(startGameReducer(INITIAL_STATE, {})).toEqual({
      currentLevel: 1,
      gameStatus: 'playing'
    })
  });
  it('should return initial state when empty', () => {
    expect(startGameReducer({}, {})).toEqual(INITIAL_STATE)
  })
});


describe('Level up reducer', () => {
  it('should return initial state', () => {
    expect(levelUpReducer(undefined, {})).toEqual(INITIAL_STATE)
  });
  it('should handle level up', () => {
    expect(levelUpReducer(PLAYING_STATE, {})).toEqual({
      currentLevel: INITIAL_STATE.currentLevel + 1,
      gameStatus: 'playing'
    })
  });
  it('should return initial state when empty', () => {
    expect(levelUpReducer({}, {})).toEqual(INITIAL_STATE)
  })
});

describe('Finish game reducer', () => {
  it('should return initial state', () => {
    expect(finishGameReducer(undefined, {})).toEqual(INITIAL_STATE)
  });
  it('should handle finish game', () => {
    expect(finishGameReducer(PLAYING_STATE, {})).toEqual({
      currentLevel: 0,
      gameStatus: 'finished'
    })
  });
  it('should return initial state when empty', () => {
    expect(finishGameReducer({}, {})).toEqual(INITIAL_STATE)
  })
});