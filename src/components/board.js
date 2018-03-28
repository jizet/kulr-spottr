import React, {Component} from 'react'
import Tile from '../components/tile'
import styled from 'styled-components'
import { getRandomColor } from '../core/util'

const Container = styled.div`
  padding: ${16 / 2}px;
  width: 40%;
  margin: 0 auto;

  &:after
    content: '';
    clear: both;
    display: block;
`

class Board extends Component {
  constructor(props) {
    super(props)
    this.generateBoard = this.generateBoard.bind(this)
  }

  generateBoard (currentLevel) {
    const color = getRandomColor()
    const board = []
    board.push(<Tile key={0} winner={true} color={color}/>)
    for (let i = 1; i < Math.pow(currentLevel,2); i++) {
        board.push(<Tile currentLevel={currentLevel} key={i} color={color} />)
    }
    board.sort((a, b) => (0.5 - Math.random()))
    return board
  }

  render () {
    return (
      <Container>
        {this.generateBoard(this.props.currentLevel)}
      </Container>
    )
  }
}

export default Board
