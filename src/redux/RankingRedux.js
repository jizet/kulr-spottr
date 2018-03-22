import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  addPlayer: ['stats']
}, {prefix: 'RAKING_'})

export const BoardTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  players: []
})
/* ------------- Reducers ------------- */

export const addPlayer = (state, {stats}) => {
  return state.merge({players: state.players.concat([stats])})
}

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_PLAYER]: addPlayer
})