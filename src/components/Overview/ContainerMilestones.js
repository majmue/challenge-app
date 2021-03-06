import React, { Component } from 'react'
import InputMilestone from './InputMilestone'
import uid from 'uid'
import styled from 'styled-components'

const StyleContainterMilestones = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  justify-self: center;
  align-items: center;
  width: 350px;
  padding: 20px;
  background-color: white;
  opacity: 0.9;
  border-radius: 10px;
  border-width: 0.5px;
  margin: 10px 0;
`

export default class ContainerMilestones extends Component {
  renderMilestones() {
    return this.props.arrayMilestones.map(this.renderSingleMilestone)
  }

  renderSingleMilestone = text => <div key={uid()}>{text}</div>

  render() {
    return (
      <StyleContainterMilestones>
        <InputMilestone onChange={this.props.addMilestone} />
        {this.renderMilestones()}
      </StyleContainterMilestones>
    )
  }
}
