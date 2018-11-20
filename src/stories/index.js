import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { text, date } from '@storybook/addon-knobs'

import InputFinishdate from '../components/Setup/InputFinishdate'
import InputChallenge from '../components/Setup/InputChallenge'
import AddButton from '../components/Setup/AddButton'

function dateKnob(name, defaultValue) {
  const stringTimestamp = date(name, defaultValue)
  return new Date(stringTimestamp)
}

storiesOf('InputChallenge', module).add('default', () => (
  <React.Fragment>
    <InputChallenge
      onSubmit={action('onEnter')}
      placeholder={text('Placeholder', 'Add your challenge')}
    />
  </React.Fragment>
))

storiesOf('InputFinishdate', module).add('default', () => (
  <React.Fragment>
    <InputFinishdate onChange={dateKnob('Label', new Date('2018.11.20'))} />
  </React.Fragment>
))

storiesOf('AddButton', module).add('default', () => (
  <React.Fragment>
    <AddButton>{text('Label', 'Hello world')}</AddButton>
  </React.Fragment>
))
