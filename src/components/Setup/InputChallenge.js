import React, { Component } from 'react'
import styled from 'styled-components'

const StyleInputChallenge = styled.input`
  height: 30px;
  min-width: 350px;
  padding: 5px;
  background-color: #efefef;
  font-family: 'Dosis', sans-serif;
  src: url('../../webfonts/Dosis-Regular.ttf');
  font-size: 12pt;
  color: #5c5d61;
  border-width: 2px 1px 2px 3px;
  border-style: inset;
  border-color: initial;
  border-image: initial;

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
        onChange={event => this.handleChangeName(event)}
        placeholder="Add your challenge..."
      />
    )
  }
}
