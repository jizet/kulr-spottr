import React from 'react'
import styled from 'styled-components'
import BoardActions from '../redux/BoardRedux'
import { getSortedPlayers } from '../redux/Selectors/index'
import { Button } from 'react-bootstrap'
import { NavLink } from '../core/components'
import { connect } from 'react-redux'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: no-wrap;
  height: 100%;
  widht: 100%;
  margin-top: 5%;
`

const MyButton = styled(Button)`
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  text-align: center;
`
const Title = styled.h1`
  font-family: 'Montserrat', 'Helvetica', sans-serif;
  font-weight: bold;
  font-style: normal;
  font-size: 32px;
  text-decoration: underline;
  line-height: 40px;
`
const Player = styled.h1`
  display: flex;
  flex-direction: row;
  font-family: 'Montserrat', 'Helvetica', sans-serif;
  font-weight: bold;
  font-style: normal;
  font-size: 32px;
  line-height: 40px;
`

const PlayerContainer = styled.div`
  display: flex;
  margin: 6px 0;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  max-height: 40px;
`

class Highscore extends React.Component {
  render () {
    return (
      <Container>
        <NavLink to={'/board'}>
          <MyButton onClick={this.props.startGame} bsStyle="primary">Play Again!</MyButton>
        </NavLink>
        <Title>HALL OF FAME</Title>
        <PlayerContainer>
        {
            this.props.players.map((player, index) => (
              <Player key={index}>
                {`${index+1}. ${player.name} ${player.level}`}
              </Player>
            ))
          }
        </PlayerContainer>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    players: getSortedPlayers(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startGame: () => dispatch(BoardActions.startGame())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Highscore)
