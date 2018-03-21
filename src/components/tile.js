import React, {Component} from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background: tomato;
  width: 100px;
  height: 100px;
  margin: 2px;
  border-radius: 3px;

  line-height: 150px;
  color: white;
  font-weight: bold;
  font-size: 3em;
  text-align: center;
`

class Tile extends Component {
  render () {
    return (
      <Container />
    )
  }
}

export default Tile
