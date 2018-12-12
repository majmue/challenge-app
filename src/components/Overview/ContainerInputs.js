import React, { Component } from 'react'

import styled from 'styled-components'
import Counter from './Counter'

const StyleContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  justify-self: center;
  align-items: center;
  height: 30vh;
  width: 350px;
  padding: 20px;
  background-color: white;
  opacity: 0.9;
  border-radius: 10px;
  margin-top: 10px;
`

const Headline = styled.h1`
  font-size: 1.6em;
  margin: 0;
`

export default class ContainerInputs extends Component {
  render() {
    const { challengeDate, challengeName } = this.props
    return (
      <StyleContainer>
        <div>Your challenge:</div>
        <Headline className="input">{challengeName}</Headline>
        <div>{challengeDate}</div>
        <Counter challengeDate={challengeDate} />
      </StyleContainer>
    )
  }
}
