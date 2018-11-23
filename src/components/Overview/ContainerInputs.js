import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyleContainer = styled.div`
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
    const { challengeDate, challengeName } = this.props
    return (
      <StyleContainer>
        <div>{challengeDate}</div>
        <div>{challengeName}</div>
      </StyleContainer>
    )
  }
}
