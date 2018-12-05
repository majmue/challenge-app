import React, { Component } from 'react'
import styled from 'styled-components'
import moment from 'moment'

const StyleCounter = styled.span`
  display: flex;
  height: 50px;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: white;
`

export default class Counter extends Component {
  render() {
    const { challengeDate } = this.props

    return <StyleCounter>Due: {moment(challengeDate).fromNow()}</StyleCounter>
  }
}
