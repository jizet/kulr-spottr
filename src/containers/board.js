import React from 'react';
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
import Tile from '../components/tile'

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
    this.createArray=this.createArray.bind(this);
  }
  createArray () {
    const aux = []
    for (let i = 0; i < Math.pow(this.props.currentLevel,2); i++) {
        aux.push(<Tile key={i} />)
    }
    return aux
  }

  render () {
    return (
      <Container amount={this.props.currentLevel}>
        {this.createArray()}
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentLevel: state.board.currentLevel
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
