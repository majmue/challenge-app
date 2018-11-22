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
  state = {
    date: ''
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
                changeDate={inputValue =>
                  this.setState({
                    ...this.state,
                    date: inputValue
                  })
                }
              />
            )}
          />
          <Route
            exact
            path="/overviewscreen"
            render={() => <OverviewScreen dateValue={this.state.date} />}
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
