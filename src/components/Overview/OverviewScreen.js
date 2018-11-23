import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ContainerInputs from './ContainerInputs'

import styled from 'styled-components'

const StyleOverviewScreen = styled.section`
  height: 100vh;
  background: white;
`

export default class OverviewScreen extends Component {
  render() {
    const { dateValue, dateName } = this.props
    return (
      <StyleOverviewScreen>
        <ContainerInputs challengeDate={dateValue} challengeName={dateName} />
      </StyleOverviewScreen>
    )
  }
}
