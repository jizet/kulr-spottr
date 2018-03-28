import React, {Component} from 'react'
import PropTypes from 'prop-types';
import BoardActions from '../redux/BoardRedux'
import styled from 'styled-components'
import { connect } from 'react-redux'

const Container = styled.div`
  width: calc(100% / ${props => props.currentLevel});
  float: left;
  position: relative;
  padding-bottom: calc(100% / ${props => props.currentLevel});
  
`

const Content = styled.div`
  width: calc(100% - ${16}px);
  height: calc(100% - ${16}px);
  margin: ${16 / 2}px;
  padding: 16px;
  position: absolute;
  border-radius: 4px;
  opacity: ${props => props.winner ? '0.5' : '1'}
  background: ${props => props.color};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.26);
`

class Tile extends Component {
  render () {
    return (
      <Container 
        onClick={this.props.winner ? this.props.levelUp : this.props.finishGame} 
        currentLevel={this.props.currentLevel}
      >
        <Content 
          color={this.props.color}
          winner={this.props.winner}
        />
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
  return {
    levelUp: () => dispatch(BoardActions.levelUp()),
    finishGame: () => dispatch(BoardActions.finishGame())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tile)

Tile.propTypes = {
  winner: PropTypes.bool,
  color: PropTypes.string
}
