import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faHourglassHalf } from '@fortawesome/free-solid-svg-icons'

import SetupScreen from './Setup/SetupScreen'
import OverviewScreen from './Overview/OverviewScreen'
import styled from 'styled-components'

library.add(faEdit)
library.add(faHourglassHalf)

const Wrapper = styled.main`
  display: grid;
  grid-template-rows: auto 50px;
  height: 100vh;
  background-color: grey;
`

const StyleNavLink = styled.nav`
  display: flex;
  border-top: 1px solid #7f0524;

  a:any-link {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: #000;
    width: 100%;
    background: #efefef;

    &:first-child {
      border-right: 1px solid #7f0524;
    }

    &.active {
      background: #7db9e8;
      color: white;
      font-size: 18pt;
    }
  }
`
export default class App extends Component {
  state = {
    challengeInputs: this.load()
  }

  save() {
    localStorage.setItem(
      'challenge-inputs',
      JSON.stringify(this.state.challengeInputs)
    )
  }

  load() {
    try {
      return JSON.parse(localStorage.getItem('challenge-inputs')) || []
    } catch (err) {
      return []
    }
  }

  render() {
    this.save()

    return (
      <Router>
        <Wrapper>
          <Route
            exact
            path="/"
            render={() => (
              <SetupScreen
                changeDate={inputDateValue =>
                  this.setState({
                    challengeInputs: {
                      ...this.state.challengeInputs,
                      dateEl: inputDateValue
                    }
                  })
                }
                changeName={inputNameValue =>
                  this.setState({
                    challengeInputs: {
                      ...this.state.challengeInputs,
                      nameEl: inputNameValue
                    }
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
                dateValue={this.state.challengeInputs.dateEl}
                nameValue={this.state.challengeInputs.nameEl}
                pictureValue={this.state.challengeInputs.pictureEl}
              />
            )}
          />
          <StyleNavLink>
            <NavLink exact activeClassName="active" to="/">
              <FontAwesomeIcon className="icon" icon="edit" />
            </NavLink>
            <NavLink activeClassName="active" to="/overviewscreen">
              <FontAwesomeIcon className="icon" icon="hourglass-half" />
            </NavLink>
          </StyleNavLink>
        </Wrapper>
      </Router>
    )
  }
}
