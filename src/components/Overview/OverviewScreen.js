import React, { Component } from 'react'
import ContainerInputs from './ContainerInputs'
import ContainerMilestones from './ContainerMilestones'

import styled from 'styled-components'

const StyleOverviewScreen = styled.section`
  display: grid;
  grid-gap: 10px;
  grid-template-rows: auto;
  justify-self: center;
  align-items: center;
  background: url(${props => props.bg});
  background-size: cover;
  font-family: 'Montserrat', sans-serif;
  width: 100%;
  overflow-y: scroll;
`

const Background = styled.img`
  top: 0;
  left: 0;
  object-fit: cover;
  position: absolute;
  height: 100%;
  width: 100%;
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
      <StyleOverviewScreen>
        {backgroundImage && <Background src={backgroundImage} alt="" />}
        <ContainerInputs challengeDate={dateValue} challengeName={nameValue} />
        <ContainerMilestones
          addMilestone={addMilestone}
          arrayMilestones={arrayMilestones}
        />
      </StyleOverviewScreen>
    )
  }
}
