import React, { Component } from 'react'
import styled from 'styled-components'

const StyleInputChallenge = styled.input`
  height: 30px;
  min-width: 350px;
  padding: 5px;
  background-color: #efefef;
  font-size: 12pt;
  color: #5c5d61;
  border-radius: 10px;
  border-width: 0.5px;
  margin: 15px 0;

  &:focus {
    border-color: #4089ee;
  }
`

export default class InputChallenge extends Component {
  handleChangeName = event => {
    const input = event.target
    this.props.onChange(input.value)
  }

  render() {
    return (
      <StyleInputChallenge
        data-cy="InputChallenge"
        onChange={event => this.handleChangeName(event)}
        placeholder="Add your challenge..."
      />
    )
  }
}
