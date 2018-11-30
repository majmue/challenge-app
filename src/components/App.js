import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import Unsplash, { toJson } from 'unsplash-js'

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
    }
  }
`
const unsplash = new Unsplash({
  applicationId:
    '02c57ebbd2a93d26644b034967c373926463f84a7be377ecd72def943bd2e467',
  secret: '1655e9e533f1a1f33b7b7fb64b062631872ce1c2eac91c3bdf1c8f82cfd3cafe',
  callbackUrl: '{YOUR_CALLBACK_URL‚}'
})

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

  searchDogs() {
    unsplash.search
      .photos('dogs', 1)
      .then(toJson)
      .then(json)
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
                changePicture={inputPictureValue =>
                  this.setState({
                    challengeInputs: {
                      ...this.state.challengeInputs,
                      pictureEl: inputPictureValue
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
          <Route
            exact
            path="/dogs"
            render={() => <React.Fragment>{this.searchDogs()}</React.Fragment>}
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
