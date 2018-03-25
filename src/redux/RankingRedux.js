import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  addPlayer: ['stats']
}, {prefix: 'RANKING_'})

export const BoardTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  players: []
})
/* ------------- Reducers ------------- */

export const addPlayer = (state, {stats}) => {
  // return [stats].concat(state.players).sort((a, b) => (b.level - a.level))
  const a = state.merge({players: state.players.concat([stats])})
  const b = [].concat(a.players).sort((c, b) => (b.level - c.level))
  return b
}

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_PLAYER]: addPlayer
})
