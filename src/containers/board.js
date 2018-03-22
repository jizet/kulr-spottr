import React from 'react';
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
import Tile from '../components/tile'
import BoardActions from '../redux/BoardRedux'
import { getRandomColor } from '../util/index'

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

class Board extends React.Component {
  constructor(props){
    super(props);
    this.generateBoard=this.generateBoard.bind(this);
  }
  generateBoard () {
    const color = getRandomColor()
    const aux = []
    aux.push(<Tile key={0} winner={true} color={color}/>)
    for (let i = 1; i < Math.pow(this.props.currentLevel,2); i++) {
        aux.push(<Tile key={i} color={color} />)
    }
    aux.sort((a, b) => (0.5 - Math.random()))
    return aux
  }

  render () {
    return (
      <div>
        {/* <Button onClick={this.props.levelUp}>Level Up</Button> */}
        {this.props.playing && <Container amount={this.props.currentLevel}>
          {this.generateBoard()}
        </Container>}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentLevel: state.board.currentLevel,
    playing: state.board.playing
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    levelUp: () => dispatch(BoardActions.levelUp())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
