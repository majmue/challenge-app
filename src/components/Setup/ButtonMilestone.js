import React, { Component } from 'react'

import styled from 'styled-components'

const StyleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 30px;
  background-color: #4089ee;
  text-shadow: 0 -1px #2980b9;
  font-size: 10pt;
  color: white;
`

export default class ButtonMilestone extends Component {
  handleButtonMilestone = event => {
    const input = event.target
    this.props.onClick(input.value)
  }

  render() {
    return (
      <React.Fragment>
        <StyleButton
          onClick={event => this.handleButtonMilestone(event)}
          placeholder="Add your milestone..."
        >
          &#43;
        </StyleButton>
      </React.Fragment>
    )
  }
}
