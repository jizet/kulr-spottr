import React from 'react';
import styled from 'styled-components'
import Tile from '../components/tile'
import BoardActions from '../redux/BoardRedux'
import RankingActions from '../redux/RankingRedux'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
import { NavLink } from '../core/components'
import { getRandomColor, gameStatuses } from '../core/util'
import { equals } from 'ramda'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 0;
  margin: auto;
  margin-top: 5%;

  max-width: ${props => props.amount * 110}px;
  max-height: 100%;
  height: 100%;
  width: 100%;
`

const LevelContainer = styled.h1`
  font-family: 'Montserrat', 'Helvetica', sans-serif;
  font-weight: bold;
  font-style: normal;
  font-size: 32px;
  line-height: 40px;
`

class Board extends React.Component {
  constructor(props){
    super(props);
    this.state = {value: ''}
    this.handleChange = this.handleChange.bind(this)
    this.generateBoard = this.generateBoard.bind(this)
    this.addPlayerToRanking = this.addPlayerToRanking.bind(this)
  }

  generateBoard () {
    const color = getRandomColor()
    const board = []
    board.push(<Tile key={0} winner={true} color={color}/>)
    for (let i = 1; i < Math.pow(this.props.currentLevel,2); i++) {
        board.push(<Tile key={i} color={color} />)
    }
    board.sort((a, b) => (0.5 - Math.random()))
    return board
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  addPlayerToRanking() {
    this.props.addPlayer({name: this.state.value, level: this.props.currentLevel})
    this.setState({value: ''});
  }

  render () {
    return (
      <div>
        {
          equals(this.props.gameStatus, gameStatuses.finished) &&
          <div>
            Player Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            <NavLink to='/highscore'>
              <Button onClick={this.addPlayerToRanking}>Submit name</Button>
            </NavLink>
          </div>
        }
        {equals(this.props.gameStatus, gameStatuses.finished) && <Button onClick={this.props.startGame}>Play Again</Button>}
        {equals(this.props.gameStatus, gameStatuses.playing) && 
        <div>
          <LevelContainer>
            Your level is: {this.props.currentLevel} !
          </LevelContainer>
          <Container amount={this.props.currentLevel}>
            {this.generateBoard()}
          </Container>
        </div>}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentLevel: state.board.currentLevel,
    gameStatus: state.board.gameStatus
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startGame: () => dispatch(BoardActions.startGame()),
    addPlayer: (playerStats) => dispatch(RankingActions.addPlayer(playerStats))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
