import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import InputChallenge from './InputChallenge'
import InputFinishdate from './InputFinishdate'

import logo from '../../images/me-now_logo.png'

import styled from 'styled-components'

const StyleSetupScreen = styled.section`
  display: grid;
  grid-template-columns: auto;
  justify-content: center;
  align-content: center;
  grid-gap: 10px;
  height: 100vh;
  background: linear-gradient(
    to bottom,
    #7db9e8 30%,
    #7db9e8 35%,
    #207cca 85%,
    #4c88da 100%
  );

  .btn {
    height: 30px;
    width: 200px;
    align-content: center;
    background: #e2083f;
    text-shadow: 0px -1px #2980b9;
    color: white;
  }
`
const Logo = styled.img`
  width: 200px;
  border: 1px solid red;
  .logo {
    height: 400px;
  }
`

export default class SetupScreen extends Component {
  render() {
    const { changeDate, changeName } = this.props
    return (
      <StyleSetupScreen>
        <Logo className="logo" src={logo} alt="Logo" />
        <InputChallenge onEnter={inputValue => changeName(inputValue)} />
        <InputFinishdate onChange={inputValue => changeDate(inputValue)} />
        <Link to="/overviewscreen">
          <button type="button" className="btn">
            Add
          </button>
        </Link>
      </StyleSetupScreen>
    )
  }
}
