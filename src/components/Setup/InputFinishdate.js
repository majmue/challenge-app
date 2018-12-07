import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyleInputDate = styled.input`
  height: 30px;
  width: 200px;
  padding: 5px;
  background-color: #efefef;
  border-width: 2px 1px 2px 3px;
  border-style: inset;
  border-color: initial;
  border-image: initial;

  &:focus {
    border-color: #4089ee;
  }
`
export default class InputFinishdate extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired
  }

  handleChangeDate = event => {
    const input = event.target
    this.props.onChange(input.value)
    input.focus()
  }

  render() {
    return (
      <StyleInputDate
        type="date"
        onChange={event => this.handleChangeDate(event)}
      />
    )
  }
}
