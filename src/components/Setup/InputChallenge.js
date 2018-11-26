import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyleInputChallenge = styled.input`
  height: 30px;
  width: 200px;
  padding: 5px;
  border: 1px solid #7f0524;
`

export default class InputChallenge extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired
  }

  handleInputValue = event => {
    const input = event.target
    this.props.onChange(input.value)
  }

  render() {
    return (
      <StyleInputChallenge
        onChange={event => this.handleInputValue(event)}
        placeholder="Add your challenge..."
      />
    )
  }
}
