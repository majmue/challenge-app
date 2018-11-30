import React, { Component } from 'react'
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
  height: 94vh;
  background: linear-gradient(
    to bottom,
    #7db9e8 30%,
    #7db9e8 35%,
    #207cca 85%,
    #4c88da 100%
  );

  a:any-link {
    text-decoration: none;
  }
`

const Logo = styled.img`
  width: 200px;
  border: 1px solid #7f0524;
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
        <InputChallenge onChange={changeName} />
        <InputFinishdate onChange={changeDate} />
      </StyleSetupScreen>
    )
  }
}
