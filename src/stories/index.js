import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { text, date } from '@storybook/addon-knobs'

import InputFinishdate from '../components/Setup/InputFinishdate'
import InputChallenge from '../components/Setup/InputChallenge'
import AddButton from '../components/Setup/AddButton'
import ContainerInputs from '../components/Overview/ContainerInputs'

function dateKnob(name, defaultValue) {
  const stringTimestamp = date(name, defaultValue)
  return new Date(stringTimestamp)
}

storiesOf('InputChallenge', module).add('default', () => (
  <InputChallenge
    onSubmit={action('onEnter')}
    placeholder={text('Placeholder', 'Add your challenge...')}
  />
))

storiesOf('InputFinishdate', module).add('default', () => (
  <InputFinishdate onChange={dateKnob('Label', new Date('2018.11.20'))} />
))

storiesOf('AddButton', module).add('default', () => (
  <AddButton>{text('Label', 'Hello world')}</AddButton>
))

storiesOf('ContainerInputs', module).add('default', () => (
  <ContainerInputs
    challengeName={text('Challenge-Name', 'Beispielchallenge')}
    challengeDate={dateKnob('Challenge-Date', new Date('2018.11.20'))}
  />
))
