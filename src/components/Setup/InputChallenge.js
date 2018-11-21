import React, { Component } from 'react'
import styled from 'styled-components'

const Input = styled.input`
  height: 30px;
  width: 200px;
  padding: 5px;
  border: 1px solid #e2083f;
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
      <Input onSubmit={this.handleKeyUp} placeholder={this.props.placeholder} />
    )
  }
}
