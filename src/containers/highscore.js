import React from 'react'
import styled from 'styled-components'
import BoardActions from '../redux/BoardRedux'
import { Button } from 'react-bootstrap'
import { NavLink } from '../util/index'
import { connect } from 'react-redux'
import { equals, isEmpty, isNil } from 'ramda'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: no-wrap;
  height: 100%;

  padding: 0;
  margin: auto;
  margin-top: 5%;
`

const MyButton = styled(Button)`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`

const Player = styled.div`
  display: flex;
  flex-direction: row;
`

class Highscore extends React.Component {
  render () {
    return (
      <Container>
          {
            this.props.players.map((player, index) => (
              <Player key={index}>
                {`${player.name} ${player.level}`}
              </Player>
            ))
          }
          <NavLink to={'/board'}>
            <MyButton onClick={this.props.startGame} bsStyle="primary">Start Game</MyButton>
          </NavLink>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    players: state.ranking.players
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startGame: () => dispatch(BoardActions.startGame())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Highscore)
