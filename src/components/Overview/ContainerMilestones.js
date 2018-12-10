import React, { Component } from 'react'
import InputMilestone from './InputMilestone'

import styled from 'styled-components'

const StyleContainterMilestones = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  height: 30vh;
  min-width: 200px;
  padding: 20px;
  background-color: #efefef;
`

export default class ContainerMilestones extends Component {
  renderMilestones() {
    return this.props.arrayMilestones.map(this.renderSingleMilestone)
  }

  renderSingleMilestone = text => <div>{text}</div>

  render() {
    return (
      <StyleContainterMilestones>
        <InputMilestone onChange={this.props.addMilestone} />
        {this.renderMilestones()}
      </StyleContainterMilestones>
    )
  }
}
