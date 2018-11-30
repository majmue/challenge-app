import React, { Component } from 'react'
import styled from 'styled-components'
import moment from 'moment'

const StyleCounter = styled.span`
  display: flex;
  height: 100px;
  justify-content: center;
  align-items: center;
  border: 1px solid #7f0524;
`

export default class Counter extends Component {
  render() {
    const { challengeDate } = this.props

    return (
      <StyleCounter>
        Due:{moment(challengeDate).toNow()} {/* days */}
      </StyleCounter>
    )
  }
}
