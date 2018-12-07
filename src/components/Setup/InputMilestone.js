import React, { Component } from 'react'
import styled from 'styled-components'

const StyleInputMilestone = styled.input`
  height: 30px;
  width: 200px;
  padding: 5px;
  background-color: #efefef;
  font-style: 11px system-ui;
  border-width: 2px 1px 2px 3px;
  border-style: inset;
  border-color: initial;
  border-image: initial;

  &:focus {
    border-color: #4089ee;
  }
`

export default class InputMilestone extends Component {
  handleMilestones = event => {
    const input = event.target
    this.props.onChange(input.value)
  }

  render() {
    return (
      <StyleInputMilestone
        onChange={event => this.handleMilestones(event)}
        placeholder="Add your milestone..."
      />
    )
  }
}
