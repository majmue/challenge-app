import React, { Component } from 'react'
import InputChallenge from './InputChallenge'
import InputFinishdate from './InputFinishdate'
import ContainerImages from './ContainerImages'

import logo from '../../images/me-now_logo.png'

import styled from 'styled-components'

const StyleSetupScreen = styled.section`
  display: grid;
  grid-template-columns: auto;
  justify-content: center;
  justify-items: center;
  align-content: center;
  grid-gap: 10px;
  height: 94vh;
  background: linear-gradient(
    to bottom,
    #7db9e8 10%,
    #7db9e8 15%,
    #207cca 65%,
    #4c88da 100%
  );

  a:any-link {
    text-decoration: none;
  }
`

const Logo = styled.img`
  display: flex;
  width: 150px;
  margin-bottom: 100px;
`

export default class SetupScreen extends Component {
  render() {
    const {
      changeDate,
      changeName,
      changeBackground,
      selectedImage
    } = this.props

    return (
      <StyleSetupScreen>
        <Logo className="logo" src={logo} alt="Logo" />
        <InputChallenge onChange={changeName} />
        <InputFinishdate onChange={changeDate} />
        <ContainerImages
          selectedImage={selectedImage}
          onClick={changeBackground}
        />
      </StyleSetupScreen>
    )
  }
}
