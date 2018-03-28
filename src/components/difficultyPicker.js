import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { ToggleButtonGroup, ToggleButton } from 'react-bootstrap'
import BoardActions from '../redux/BoardRedux'

const ToggleButtonGroupContainer = styled.div`
  display: flex;
  justify-content: center;
`

class DifficultyPicker extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this)
    this.state = { value: ''}
  }

  handleChange(e) {
    this.setState({ value: e });
    this.props.setDifficulty(e)
  }

  render () {
    return (
      <ToggleButtonGroupContainer>
        <ToggleButtonGroup
          name='difficulty'
          type='radio'
          value={this.state.value}
          onChange={this.handleChange}
        >
          <ToggleButton value={'easy'}>Easy</ToggleButton>
          <ToggleButton value={'medium'}>Medium</ToggleButton>
          <ToggleButton value={'hard'}>Hard</ToggleButton>
        </ToggleButtonGroup>
      </ToggleButtonGroupContainer>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setDifficulty: (difficulty) => dispatch(BoardActions.setDifficulty(difficulty))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DifficultyPicker)
