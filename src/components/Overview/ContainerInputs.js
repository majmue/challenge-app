import React, { Component } from 'react'

import styled from 'styled-components'
import Counter from './Counter'

const StyleContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 50vh;
  min-width: 200px;
  padding: 20px;
  background-color: #efefef;
  border: 1px solid #7f0524;

  div {
    margin: 10px;
  }
`

export default class ContainerInputs extends Component {
  render() {
    const { challengeDate, challengeName } = this.props
    return (
      <StyleContainer>
        <div>{challengeDate}</div>
        <div>{challengeName}</div>
        <Counter challengeDate={challengeDate} />
      </StyleContainer>
    )
  }
}
