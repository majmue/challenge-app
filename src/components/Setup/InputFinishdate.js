import React, { Component } from 'react'
import styled from 'styled-components'

export default class InputFinishdate extends Component {
  handleChange = event => {
    const input = event.target
    this.props.onChange(input.value)
    input.value = ''
    input.focus()
  }

  render() {
    return (
      <React.Fragment>
        <input type="date" onChange={this.handleChange} />
      </React.Fragment>
    )
  }
}
