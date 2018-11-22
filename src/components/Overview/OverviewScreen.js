import React, { Component } from 'react'
import ContainerInputs from './ContainerInputs'
import logo from '../../images/me-now_logo.png'

import styled from 'styled-components'

const StyleOverviewScreen = styled.section`
  height: 100vh;
  background: white;
`
const Logo = styled.img`
  width: 200px;
  border: 1px solid red;
  .logo {
    height: 200px;
  }
`

export default class Overview extends Component {
  render() {
    const { dateValue, dateName } = this.props
    return (
      <StyleOverviewScreen>
        <Logo className="logo" src={logo} alt="Logo" />
        <ContainerInputs challengeDate={dateValue} challengeName={dateName} />
      </StyleOverviewScreen>
    )
  }
}
