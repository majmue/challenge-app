import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 50vh;
  min-width: 300px;
  padding: 20px;
  background-color: #efefef;
  border: 1px solid #e2083f;
  border-radius: 10px;

  div {
    margin: 10px;
  }
`

export default class ContainerInputs extends Component {
  render() {
    const { challengeName, challengeDate } = this.props
    return (
      <Container>
        <div>{challengeName}</div>
        <div>{challengeDate.toLocaleDateString('de')}</div>
      </Container>
    )
  }
}
