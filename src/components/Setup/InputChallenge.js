import React, { Component } from 'react'
import styled from 'styled-components'

const StyleInputChallenge = styled.input`
  display: grid;
  height: 30px;
  width: 200px;
  padding: 5px;
  border: 1px solid #e2083f;
  grid-column: 2 / span 3;
  grid-row: 6 / span 1;
`

export default class InputChallenge extends Component {
  handleKeyUp = event => {
    const input = event.target
    if (event.key === 'Enter') {
      this.props.onEnter(input.value)
      input.value = ''
      input.focus()
    }
  }

  render() {
    return (
      <StyleInputChallenge>
        <InputChallenge
          onSubmit={() => this.handleKeyUp}
          placeholder={this.props.placeholder}
        />
      </StyleInputChallenge>
    )
  }
}
