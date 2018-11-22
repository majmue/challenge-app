import React, { Component } from 'react'
import ContainerInputs from './ContainerInputs'

import styled from 'styled-components'

const StyleOverviewScreen = styled.section`
  height: 100vh;
  background: white;
`

export default class Overview extends Component {
  handleChange = event => {
    const input = event.target
    this.props.onChange(input.value)
    input.value = ''
    input.focus()
  }

  render() {
    return (
      <StyleOverviewScreen>
        <ContainerInputs
          onChange={inputValue => this.handleChange(inputValue)}
        />
      </StyleOverviewScreen>
    )
  }
}
