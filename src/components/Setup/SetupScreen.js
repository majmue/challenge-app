import React, { Component } from 'react'

import InputChallenge from './InputChallenge'
import InputFinishdate from './InputFinishdate'
import AddButton from './AddButton'
import logo from '../../images/me-now_logo.png'

import styled from 'styled-components'

const StyleSetupScreen = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 50%;

  height: 100vh;
  width: 100vh;
  background-color: #4c88da;

  .logo {
    grid-column: 2 / span 2;
    grid-row: 4 / span 2;
  }
`

const Logo = styled.img`
  width: 200px;
  border: 1px solid red;
`

export default class SetupScreen extends Component {
  // handleChange = event => {
  //   const input = event.target
  //   this.props.onChange(input.value)
  //   input.value = ''
  //   input.focus()
  // }

  render() {
    return (
      <StyleSetupScreen>
        <Logo className="logo" src={logo} alt="Logo" />
        <InputChallenge
          className="input-name"
          placeholder="Add your challenge..."
        />
        <InputFinishdate
          className="input-date"
          // onChange={inputValue => this.handleChange(inputValue)}
        />
        <AddButton />
      </StyleSetupScreen>
    )
  }
}
