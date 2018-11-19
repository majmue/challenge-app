import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { text, date } from '@storybook/addon-knobs'

import InputFinishdate from '../components/Setups/InputFinishdate'
import InputChallenge from '../components/Setups/InputChallenge'
import AddButton from '../components/Setups/AddButton'

const defaultDate = new Date()

storiesOf('InputChallenge', module).add('default', () => (
  <React.Fragment>
    <InputChallenge onEnter={action('onEnter')}>
      {text('Label', 'Hello world')}
    </InputChallenge>
  </React.Fragment>
))

storiesOf('InputFinishdate', module).add('default', () => (
  <React.Fragment>
    <InputFinishdate>{date('Date', defaultDate)}</InputFinishdate>
  </React.Fragment>
))

storiesOf('AddButton', module).add('default', () => (
  <React.Fragment>
    <AddButton>{text('Label', 'Hello world')}</AddButton>
  </React.Fragment>
))
