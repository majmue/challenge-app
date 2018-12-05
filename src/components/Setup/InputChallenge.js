import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyleInputChallenge = styled.input`
  height: 30px;
  width: 200px;
  padding: 5px;
  background-color: #efefef;
  font-style: 11px system-ui;
`

export default class InputChallenge extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired
  }

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
