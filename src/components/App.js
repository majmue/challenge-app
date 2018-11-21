import React, { Component } from 'react'
import SetupScreen from './Setup/SetupScreen'
import OverviewScreen from './Overview/OverviewScreen'

import styled from 'styled-components'

const Wrapper = styled.main`
  height: 100vh;
  background-color: #6699ff;
`

export default class App extends Component {
  render() {
    return (
      <Wrapper>
        <SetupScreen />
        <OverviewScreen />
      </Wrapper>
    )
  }
}
