import React, { Component } from 'react'
import styled from 'styled-components'
import moment from 'moment'

const StyleCounter = styled.span`
  display: flex;
  height: 50px;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: #efefef;
  font-family: 'Montserrat', sans-serif;
  font-size: 12pt;
  font-weight: regular;
  border-radius: 5px;
`

export default class Counter extends Component {
  render() {
    const { challengeDate } = this.props

    return (
      <StyleCounter data-cy="Counter">
        <strong>Due: {moment(challengeDate).fromNow()}</strong>
      </StyleCounter>
    )
  }
}
