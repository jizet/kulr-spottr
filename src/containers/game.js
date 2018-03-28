import React from 'react';
import styled from 'styled-components'

import BoardActions from '../redux/BoardRedux'
import RankingActions from '../redux/RankingRedux'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
import { NavLink } from '../core/components'
import { gameDifficulties, gameStatuses } from '../core/util'
import { equals } from 'ramda'
import Countdown from 'react-countdown-now'
import Board from '../components/board'

const LevelContainer = styled.h1`
  font-family: 'Montserrat', 'Helvetica', sans-serif;
  font-weight: bold;
  font-style: normal;
  font-size: 32px;
  line-height: 40px;
`

const Timer = styled.h1`
  font-family: 'Montserrat', 'Helvetica', sans-serif;
  font-weight: bold;
  font-style: normal;
  font-size: 32px;
  line-height: 40px;
`

class Game extends React.Component {
  constructor(props){
    super(props);
    this.state = {value: '', time: Date.now()}
    this.handleChange = this.handleChange.bind(this)
    this.playAgain = this.playAgain.bind(this)
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  playAgain() {
    this.setState({time: Date.now()})
    this.props.startGame()
  }

  addPlayerToRanking() {
    this.props.addPlayer({name: this.state.value, level: this.props.currentLevel, difficulty: this.props.difficulty})
    this.setState({value: ''});
  }

  render () {
    const { difficulty, gameStatus } = this.props
    return (
      <div>
        {
          equals(gameStatus, gameStatuses.finished) &&
          <div>
            Player Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            <NavLink to='/highscore'>
              <Button onClick={() => this.addPlayerToRanking()}>Submit name</Button>
            </NavLink>
          </div>
        }
        {equals(gameStatus, gameStatuses.finished) && <Button onClick={this.playAgain}>Play Again</Button>}
        {equals(gameStatus, gameStatuses.playing) && 
        <div>
          <Timer>
            Time Left: <Countdown date={this.state.time + gameDifficulties[difficulty]} onComplete={() => this.props.finishGame()}/> !
          </Timer>
          <LevelContainer>
            Your level is: {this.props.currentLevel} !
          </LevelContainer>
          <Board 
            currentLevel={this.props.currentLevel}
          />
        </div>}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentLevel: state.board.currentLevel,
    gameStatus: state.board.gameStatus,
    difficulty: state.board.difficulty
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startGame: () => dispatch(BoardActions.startGame()),
    finishGame: () => dispatch(BoardActions.finishGame()),
    addPlayer: (playerStats) => dispatch(RankingActions.addPlayer(playerStats))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)
