import React, { Component } from 'react'
import styled from 'styled-components'

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
      <React.Fragment>
        <input onKeyUp={this.handleKeyUp} placeholder="Add your challenge" />
      </React.Fragment>
    )
  }
}
