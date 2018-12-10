import React, { Component } from 'react'
import styled from 'styled-components'

const StyleInputMilestone = styled.input`
  height: 30px;
  width: 200px;
  padding: 5px;
  background-color: white;
  font-style: 11px system-ui;
  border-width: 2px 1px 2px 3px;
  border-color: white;

  &:focus {
    border-color: #4089ee;
  }
`

export default class InputMilestone extends Component {
  handleMilestones = event => {
    const input = event.target
    if (event.key === 'Enter') {
      this.props.onChange(input.value)
      input.value = ''
      input.focus()
    }
  }

  render() {
    return (
      <StyleInputMilestone
        onKeyUp={event => this.handleMilestones(event)}
        placeholder="Add your milestone..."
      />
    )
  }
}
