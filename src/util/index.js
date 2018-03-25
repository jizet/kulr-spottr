import { createSelector } from 'reselect'
import styled from 'styled-components'
import * as ReactRouterDOM from 'react-router-dom'

export const NavLink = styled(ReactRouterDOM.NavLink)`
  color: inherit;
  text-decoration: inherit;
`

export const gameStatuses = {
  waiting: 'waiting',
  playing: 'playing',
  finished: 'finished'
}

const rand = (min, max) => {
  return min + Math.random() * (max - min)
}
export const getRandomColor = () => {
  let h = rand(1, 360);
  let s = rand(0, 60);
  let l = rand(0, 60);
  return 'hsl(' + h + ',' + s + '%,' + l + '%)';
}
