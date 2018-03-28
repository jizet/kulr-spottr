import React from 'react'
import styled from 'styled-components'
import BoardActions from '../redux/BoardRedux'
import { getSortedPlayers } from '../redux/Selectors/index'
import { Button } from 'react-bootstrap'
import { NavLink } from '../core/components'
import { connect } from 'react-redux'
import DifficultyPicker from '../components/difficultyPicker'

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
  align-items: center;
  justify-content: space-around;
  width: 100%;
`

const PlayerContainer = styled.div`
  display: flex;
  margin: 6px 0;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  max-height: 40px;
`

const TitleContainer = styled.div`
  display: flex;
  margin: 6px 0
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  max-height: 40px;
`

const Text = styled.div`
  font-family: 'Montserrat', 'Helvetica', sans-serif;
  font-weight: bold;
  font-style: normal;
  font-size: 32px;
  line-height: 40px;
`

const StatsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`

class Highscore extends React.Component {
  constructor(props) {
    super(props)
    this.state = {show: false}
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange() {
    this.setState({show: !this.state.show})
  }
  render () {
    return (
      <Container>
        <NavLink to={'/board'}>
          <MyButton onClick={this.props.startGame} bsStyle="primary">Play Again!</MyButton>
        </NavLink>
        {this.state.show ? <DifficultyPicker /> : <MyButton onClick={this.handleChange}>Change Difficulty</MyButton>}
        <Title>HALL OF FAME</Title>
        <TitleContainer>
          <Text>Name</Text>
          <Text>Level</Text>
          <Text>Difficulty</Text>
        </TitleContainer>
        <PlayerContainer>
        {
            this.props.players.map((player, index) => (
              <Player key={index}>
                {
                  <StatsContainer>
                    <Text>{player.name}</Text>
                    <Text>{player.level}</Text>
                    <Text>{player.difficulty}</Text>
                  </StatsContainer>
                }
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
