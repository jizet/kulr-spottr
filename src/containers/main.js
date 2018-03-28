import React from 'react';
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
import BoardActions from '../redux/BoardRedux'
import { NavLink } from '../core/components/link'
import DifficultyPicker from '../components/difficultyPicker'

const Container = styled.div`
  display:flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
  width: 100%;
`

const MyButton = styled(Button)`
  text-align: center;
`

class Main extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.startGame = this.startGame.bind(this)
  }

  startGame() {
    this.props.startGame()
  }

  render () {
    return (
      <Container>
        <NavLink to={'/board'}>
          <MyButton onClick={() => this.startGame()} bsStyle="primary">Start Game</MyButton>
        </NavLink>
        <DifficultyPicker />
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startGame: () => dispatch(BoardActions.startGame())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
