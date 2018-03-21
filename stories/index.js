import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

storiesOf('Button', module)
  .add('with text', () => (
    <div>Hello</div>
  ))
  .add('with some emoji', () => (
    <div>Hello 😀 😎 👍 💯</div>
  ))
