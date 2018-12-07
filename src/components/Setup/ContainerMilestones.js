import React, { Component } from 'react'
import InputMilestone from './InputMilestone'
import ButtonMilestone from './ButtonMilestone'

export default class ContainerMilestones extends Component {
  state = {
    tempText: ''
  }

  sendMilestone(text) {
    this.props.sendMilestone(this.state.tempText)
  }

  render() {
    return (
      <React.Fragment>
        <InputMilestone onChange={text => this.setState({ tempText: text })} />
        <ButtonMilestone onClick={text => this.sendMilestone(text)} />
      </React.Fragment>
    )
  }
}
