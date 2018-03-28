import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import { isNil, isEmpty } from 'ramda'

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  levelUp: [],
  finishGame: [],
  startGame: [],
  setDifficulty: ['difficulty']
}, {prefix: 'BOARD_'})

export const BoardTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  currentLevel: 0,
  gameStatus: 'waiting',
  difficulty: 'easy'
})
/* ------------- Reducers ------------- */

function inc (x) { return x + 1 }

export const startGame = (state) => {
  return isNil(state) || isEmpty(state) ? INITIAL_STATE : state.set('currentLevel', 1).set('gameStatus', 'playing')
}

export const setDifficulty = (state, payload) => {
  return isNil(state) || isEmpty(state) ? INITIAL_STATE : state.set('difficulty', payload.difficulty)
}

export const levelUp = (state) => {
  return isNil(state) || isEmpty(state) ? INITIAL_STATE : state.update('currentLevel', inc)
}

export const finishGame = (state) => {
  return isNil(state) || isEmpty(state) ? INITIAL_STATE : state.set('gameStatus', 'finished')
}

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.LEVEL_UP]: levelUp,
  [Types.START_GAME]: startGame,
  [Types.FINISH_GAME]: finishGame,
  [Types.SET_DIFFICULTY]: setDifficulty
})
