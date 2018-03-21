import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  levelUp: []
}, {prefix: 'BOARD_'})

export const BoardTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  currentLevel: 1
})
/* ------------- Reducers ------------- */

function inc (x) { return x + 1 }

export const levelUp = (state) => {
  return state.update('currentLevel', inc)
}

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.LEVEL_UP]: levelUp
})
