import React, { Component } from 'react'
import styled from 'styled-components'

const StyleInputDate = styled.input`
  display: grid;
  height: 30px;
  width: 200px;
  padding: 5px;
  border: 1px solid #e2083f;
  grid-column: 2 / span 3;
  grid-row: 7 / span 1;
`

export default class InputFinishdate extends Component {
  handleChange = event => {
    const input = event.target
    this.props.onChange(input.value)
    input.value = ''
    input.focus()
  }

  render() {
    return (
      <StyleInputDate>
        <InputFinishdate
          type="date"
          onChange={event => this.handleChange(event)}
        />
      </StyleInputDate>
    )
  }
}
