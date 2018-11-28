import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyleInputDate = styled.input`
  height: 30px;
  width: 200px;
  padding: 5px;
  border: 1px solid #7f0524;
  background-color: whitesmoke;
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
