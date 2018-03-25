import React, {Component} from 'react'
import PropTypes from 'prop-types';
import BoardActions from '../redux/BoardRedux'
import styled from 'styled-components'
import { connect } from 'react-redux'

const Container = styled.div`
  background: ${props => props.color}!important;
  width: 100px;
  height: 100px;
  margin: 2px;
  border-radius: 3px;

  line-height: 150px;
  color: white;
  font-weight: bold;
  font-size: 3em;
  text-align: center;
  opacity: ${props => props.winner ? '0.5' : '1'}
`

class Tile extends Component {
  render () {
    return (
      <Container 
        onClick={this.props.winner ? this.props.levelUp : this.props.finishGame} 
        color={this.props.color}
        winner={this.props.winner}
      />
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
