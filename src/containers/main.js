import React from 'react';
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
import BoardActions from '../redux/BoardRedux'
import { NavLink } from '../core/components/link'

const Container = styled.div`
  height: 100%;
  width: 100%;
`

const MyButton = styled(Button)`
  margin: 0 auto;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`

class Main extends React.Component {
  render () {
    return (
      <Container>
        <NavLink to={'/board'}>
          <MyButton onClick={this.props.startGame} bsStyle="primary">Start Game</MyButton>
        </NavLink>
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
