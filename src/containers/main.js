import React from 'react';
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
import { Elevation1 } from '../core/components'
import BoardActions from '../redux/BoardRedux'
import { NavLink } from '../util/index'

const Container = styled.div`
  height: 100%;
  width: 100%;
`

const ButtonContainer = styled(Elevation1)`
  margin: 0 auto;
  text-align: center;
`

const MyButton = styled(Button)`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`

class Main extends React.Component {
  render () {
    return (
      <Container>
        <ButtonContainer>
          <NavLink to={'/board'}>
            <MyButton onClick={this.props.startGame} bsStyle="primary">Start Game</MyButton>
          </NavLink>
        </ButtonContainer>
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
