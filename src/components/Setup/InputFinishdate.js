import React, { Component } from 'react'
import styled from 'styled-components'

const Input = styled.input`
  height: 30px;
  width: 200px;
  padding: 5px;
  border: 1px solid #e2083f;
`

export default class InputFinishdate extends Component {
  handleChange = event => {
    const input = event.target
    this.props.onChange(input.value)
    input.value = ''
    input.focus()
  }

  render() {
    return <Input type="date" onChange={this.handleChange} />
  }
}
