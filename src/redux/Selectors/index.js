import { createSelector } from 'reselect'
import Immutable from 'seamless-immutable'
import { slice } from 'ramda'
const getPlayers = state => state.ranking.players

export const getSortedPlayers = createSelector( [getPlayers], (players) => {
  const foo = Immutable.asMutable(players)
  const bar = foo.sort((a, b) => (b.level - a.level))
  return slice(0, 10, bar)
})
