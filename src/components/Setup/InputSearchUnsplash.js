import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyleInputUnsplash = styled.input`
  height: 30px;
  width: 200px;
  padding: 5px;
  border: 1px solid #7f0524;
`

export default class InputSearchUnsplash extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired
  }

  handleChangePicture = event => {
    const input = event.target
    this.props.onChange(input.value)
    input.focus()
  }

  render() {
    return (
      <StyleInputUnsplash
        type="search"
        placeholder="Find your challenge pic..."
        onChange={event => this.handleChangePicture(event)}
      />
    )
  }
}
