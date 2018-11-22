import React, { Component } from 'react'

import InputChallenge from './InputChallenge'
import InputFinishdate from './InputFinishdate'
import AddButton from './AddButton'
import logo from '../../images/me-now_logo.png'

import styled from 'styled-components'

const StyleSetupScreen = styled.section`
  height: 100vh;
  width: 100vh;
  background-color: #4c88da;
`

const Logo = styled.img`
  width: 200px;
  border: 1px solid red;
  .logo {
    height: 200px;
  }
`

export default class SetupScreen extends Component {
  render() {
    const { changeDate, changeName } = this.props
    return (
      <StyleSetupScreen>
        <Logo className="logo" src={logo} alt="Logo" />
        <InputChallenge
          onChange={inputNameValue => changeName(inputNameValue)}
        />
        <InputFinishdate onChange={inputValue => changeDate(inputValue)} />
        <AddButton />
      </StyleSetupScreen>
    )
  }
}
