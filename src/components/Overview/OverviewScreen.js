import React, { Component } from 'react'
import ContainerInputs from './ContainerInputs'
import ContainerMilestones from './ContainerMilestones'

import styled from 'styled-components'

const StyleOverviewScreen = styled.section`
  display: grid;
  grid-template-rows: auto;
  justify-self: center;
  align-items: center;
  background: url(${props => props.bg});
  background-size: cover;
  font-family: 'Dosis', sans-serif;
  width: 350px;
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
        <ContainerInputs challengeDate={dateValue} challengeName={nameValue} />
        <ContainerMilestones
          addMilestone={addMilestone}
          arrayMilestones={arrayMilestones}
        />
      </StyleOverviewScreen>
    )
  }
}
