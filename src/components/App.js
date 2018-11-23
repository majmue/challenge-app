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
    date: '',
    nameEl: ''
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
                    date: inputValue
                  })
                }
                changeName={inputNameValue =>
                  this.setState({
                    nameEl: inputNameValue
                  })
                }
              />
            )}
          />
          <Route
            exact
            path="/overviewscreen"
            render={() => (
              <OverviewScreen
                dateValue={this.state.date}
                dateName={this.state.nameEl}
              />
            )}
          />
          <nav>
            <NavLink exact activeClassName="active" to="/">
              Setup
            </NavLink>
            <NavLink activeClassName="active" to="/overviewscreen">
              Your Challenge
            </NavLink>
          </nav>
        </Wrapper>
      </Router>
    )
  }
}
