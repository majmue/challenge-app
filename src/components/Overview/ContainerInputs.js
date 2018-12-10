import React, { Component } from 'react'

import styled from 'styled-components'
import Counter from './Counter'

const StyleContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  height: 30vh;
  min-width: 200px;
  padding: 20px;
  background-color: white;
  opacity: 0.8;
  font-family: 'Dosis', sans-serif;
  font-size: 12pt;

  &.logo {
    color: #4089ee;
  }
`

export default class ContainerInputs extends Component {
  render() {
    const { challengeDate, challengeName } = this.props
    return (
      <StyleContainer>
        Your challenge:
        <div className="input">{challengeName}</div>
        <div>{challengeDate}</div>
        <Counter challengeDate={challengeDate} />
      </StyleContainer>
    )
  }
}
