import React, { Component } from 'react'
import styled from 'styled-components'

const StyleInputMilestone = styled.input`
  height: 30px;
  width: 300px;
  padding: 5px;
  margin-bottom: 15px;
  background-color: #efefef;
  border-radius: 10px;
  border-width: 0.5px;
  font-size: 12pt;

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
