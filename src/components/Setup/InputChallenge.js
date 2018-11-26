import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyleInputChallenge = styled.input`
  height: 30px;
  width: 200px;
  padding: 5px;
  border: 1px solid #e2083f;
`

export default class InputChallenge extends Component {
  static propTypes = {
    onEnter: PropTypes.func.isRequired
  }

  handleKeyUp = event => {
    const input = event.target
    if (event.key === 'Enter') {
      this.props.onEnter(input.value)
      input.focus()
    }
  }

  render() {
    return (
      <StyleInputChallenge
        onKeyUp={this.handleKeyUp}
        placeholder="Add your challenge..."
      />
    )
  }
}
