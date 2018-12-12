import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

import logo from '../images/me-now-logo.PNG'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faHourglassHalf } from '@fortawesome/free-solid-svg-icons'

import SetupScreen from './Setup/SetupScreen'
import OverviewScreen from './Overview/OverviewScreen'
import styled from 'styled-components'

library.add(faEdit)
library.add(faHourglassHalf)

const Logo = styled.img`
  position: relative;
  z-index: 1;
  display: flex;
  width: 150px;
  margin-top: 20px;
  justify-self: center;
`

const Wrapper = styled.main`
  display: grid;
  grid-template-rows: 100px auto 55px;
  height: 100vh;
  background: linear-gradient(
    to bottom,
    #d8e9f8 24%,
    #8ec0ec 56%,
    #66beea 79%,
    #73b1e7 92%,
    #9ec9ee 100%
  );
`
const StyleNavLink = styled.nav`
  display: flex;
  position: relative;

  a:any-link {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: #000;
    width: 100%;
    background: #efefef;

    &:first-child {
      border-right: 1px solid lightgrey;
    }

    &.active {
      background: #4089ee;
      color: white;
      font-size: 18pt;
    }
  }
`

export default class App extends Component {
  state = this.load() || {
    challengeInputs: [],
    backgroundImage: null,
    milestones: []
  }

  save() {
    localStorage.setItem('challenge-app--state', JSON.stringify(this.state))
  }

  load() {
    try {
      return JSON.parse(localStorage.getItem('challenge-app--state')) || null
    } catch (err) {
      return null
    }
  }

  addMilestone = text =>
    this.setState({ milestones: [...this.state.milestones, text] })

  setBackgroundImage = path => {
    this.setState({
      backgroundImage: path
    })
  }

  render() {
    this.save()

    return (
      <Router>
        <Wrapper>
          <Logo src={logo} alt="Logo" />
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
                changeBackground={this.setBackgroundImage}
                selectedImage={this.state.backgroundImage}
              />
            )}
          />
          <Route
            exact
            path="/overviewscreen"
            render={() => (
              <OverviewScreen
                addMilestone={this.addMilestone}
                arrayMilestones={this.state.milestones}
                dateValue={this.state.challengeInputs.dateEl}
                nameValue={this.state.challengeInputs.nameEl}
                backgroundImage={this.state.backgroundImage}
              />
            )}
          />
          <StyleNavLink data-cy="Navigation">
            <NavLink
              data-cy="SetupScreen"
              exact
              activeClassName="active"
              to="/"
            >
              <FontAwesomeIcon icon="edit" />
            </NavLink>
            <NavLink
              data-cy="OverviewScreen"
              activeClassName="active"
              to="/overviewscreen"
            >
              <FontAwesomeIcon icon="hourglass-half" />
            </NavLink>
          </StyleNavLink>
        </Wrapper>
      </Router>
    )
  }
}
