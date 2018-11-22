import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import SetupScreen from './Setup/SetupScreen'
import OverviewScreen from './Overview/OverviewScreen'

import styled from 'styled-components'

const Wrapper = styled.main`
  height: 100vh;
  background-color: grey;
`

export default class App extends Component {
  handleChange = event => {
    const input = event.target
    this.props.onChange(input.value)
    input.value = ''
    input.focus()
  }

  render() {
    return (
      <Router>
        <Wrapper>
          <Route
            exact
            path="/"
            render={() => (
              <SetupScreen
                onChange={inputValue => this.handleChange(inputValue)}
              />
            )}
          />
          <Route
            exact
            path="/overviewscreen"
            render={() => <OverviewScreen />}
          />
          <nav>
            <NavLink exact activeClassName="active" to="/">
              Setup
            </NavLink>
            <NavLink activeClassName="active" to="/overviewscreen">
              Overview
            </NavLink>
          </nav>
        </Wrapper>
      </Router>
    )
  }
}
