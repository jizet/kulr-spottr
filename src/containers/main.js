import React from 'react';
import styled from 'styled-components'
import { Button } from 'react-bootstrap'
import { Elevation1 } from '../core/components'

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

export const Main = () => {
  return (
    <Container>
      <ButtonContainer>
        <MyButton bsStyle="primary">Primary</MyButton>
      </ButtonContainer>
    </Container>
  )
}
