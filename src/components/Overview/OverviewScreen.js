import React, { Component } from 'react'
import logo from '../../images/me-now_logo.png'
import ContainerInputs from './ContainerInputs'

import styled from 'styled-components'

const StyleOverviewScreen = styled.section`
  display: grid;
  justify-content: center;
  align-items: center;
  height: 94vh;
  background: white;
`
const Logo = styled.img`
  width: 200px;
  border: 1px solid #7f0524;
  .logo {
    height: 400px;
  }
`

export default class OverviewScreen extends Component {
  render() {
    const { dateValue, nameValue } = this.props

    return (
      <StyleOverviewScreen>
        <Logo className="logo" src={logo} alt="Logo" />
        <ContainerInputs challengeDate={dateValue} challengeName={nameValue} />
      </StyleOverviewScreen>
    )
  }
}
