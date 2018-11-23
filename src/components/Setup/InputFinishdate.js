import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyleInputDate = styled.input`
  height: 30px;
  width: 200px;
  padding: 5px;
  border: 1px solid #e2083f;
`

export default class InputFinishdate extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired
  }

  handleChange = event => {
    const input = event.target
    this.props.onChange(input.value)
    input.value = ''
    input.focus()
  }

  render() {
    return (
      <StyleInputDate
        type="date"
        className="input-date"
        onChange={event => this.handleChange(event)}
      />
    )
  }
}
