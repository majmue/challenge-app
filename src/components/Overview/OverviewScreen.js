import React, { Component } from 'react'
import ContainerInputs from './ContainerInputs'

import styled from 'styled-components'

const StyleOverviewScreen = styled.section`
  height: 100vh;
  background: white;
`

export default class Overview extends Component {
  render() {
    const { dateValue } = this.props
    return (
      <StyleOverviewScreen>
        <ContainerInputs challengeDate={dateValue} />
      </StyleOverviewScreen>
    )
  }
}
