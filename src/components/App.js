import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import SetupScreen from './Setup/SetupScreen'
import OverviewScreen from './Overview/OverviewScreen'

import styled from 'styled-components'

const Wrapper = styled.main`
  display: grid;
  grid-template-rows: auto 50px;
  height: 100vh;
  background-color: grey;
`

const StyleNavLink = styled.nav`
  display: flex;
  border-top: 1px solid #e2083f;

  a:any-link {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: #000;
    width: 100%;
    background: #efefef;

    &:first-child {
      border-right: 1px solid #e2083f;
    }

    &.active {
      background: #7db9e8;
      color: white;
    }
  }
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
          <StyleNavLink>
            <NavLink exact activeClassName="active" to="/">
              Home
            </NavLink>
            <NavLink activeClassName="active" to="/overviewscreen">
              Challenge
            </NavLink>
          </StyleNavLink>
        </Wrapper>
      </Router>
    )
  }
}
