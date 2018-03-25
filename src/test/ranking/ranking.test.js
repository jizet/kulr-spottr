import RankingActions, { addPlayer as addPlayerReducer } from '../../redux/RankingRedux'
import Immutable from 'seamless-immutable'

const INITIAL_STATE = Immutable({
  players: []
})

const stats = {
  name: 'New Player', 
  level: 3
}

describe('Add player reducer', () => {
  it('should return initial state', () => {
    expect(addPlayerReducer(undefined, {})).toEqual(INITIAL_STATE)
  });
  it('should handle start game', () => {
    expect(addPlayerReducer(INITIAL_STATE, {stats})).toEqual({players: [{
      name: stats.name,
      level: stats.level
    }]})
  });
  it('should return initial state when empty', () => {
    expect(addPlayerReducer({}, {})).toEqual(INITIAL_STATE)
  })
})