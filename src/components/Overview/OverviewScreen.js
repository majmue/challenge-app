import React, { Component } from 'react'
import logo from '../../images/me-now-logo.PNG'
import ContainerInputs from './ContainerInputs'
import ContainerMilestones from './ContainerMilestones'

import styled from 'styled-components'

const StyleOverviewScreen = styled.section`
  display: grid;
  justify-content: center;
  align-items: center;
  height: 94vh;
  background: url(${props => props.bg});
  background-size: cover;
`

const Logo = styled.img`
  justify-self: center;
  width: 150px;
`

export default class OverviewScreen extends Component {
  render() {
    const {
      dateValue,
      nameValue,
      addMilestone,
      backgroundImage,
      arrayMilestones
    } = this.props

    return (
      <StyleOverviewScreen bg={backgroundImage}>
        <Logo src={logo} alt="Logo" />
        <ContainerInputs challengeDate={dateValue} challengeName={nameValue} />
        <ContainerMilestones
          addMilestone={addMilestone}
          arrayMilestones={arrayMilestones}
        />
      </StyleOverviewScreen>
    )
  }
}
