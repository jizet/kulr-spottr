import { createSelector } from 'reselect'
import Immutable from 'seamless-immutable'

const getPlayers = state => state.ranking.players

export const getSortedPlayers = createSelector( [getPlayers], (players) => {
  const foo = Immutable.asMutable(players)
  const bar = foo.sort((a, b) => (b.level - a.level))
  return bar
})
