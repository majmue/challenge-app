import React, { Component } from 'react'
import styled from 'styled-components'

const StyleInputDate = styled.input`
  height: 30px;
  min-width: 350px;
  padding: 5px;
  margin-bottom: 15px;
  background-color: #efefef;
  font-family: 'Dosis', sans-serif;
  font-size: 12pt;
  color: #5c5d61;
  border-width: 2px 1px 2px 3px;
  border-style: inset;
  border-color: initial;
  border-image: initial;
  border-radius: 0px;
  appearance: none;

  &:focus {
    border-color: #4089ee;
  }
`
export default class InputFinishdate extends Component {
  handleChangeDate = event => {
    const input = event.target
    this.props.onChange(input.value)
    input.focus()
  }

  render() {
    return (
      <StyleInputDate
        type="date"
        onChange={event => this.handleChangeDate(event)}
      />
    )
  }
}
