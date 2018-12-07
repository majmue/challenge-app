import React, { Component } from 'react'

import styled from 'styled-components'
import Counter from './Counter'

const StyleContainer = styled.div`
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

export default class ContainerInputs extends Component {
  render() {
    const { challengeDate, challengeName, milestones } = this.props
    console.log(milestones)
    return (
      <StyleContainer>
        {milestones.map(text => {
          return <p>{text}</p>
        })}
        Your challenge:
        <div>{challengeName}</div>
        <div>{challengeDate}</div>
        <Counter challengeDate={challengeDate} />
      </StyleContainer>
    )
  }
}
