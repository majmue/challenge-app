import React, { Component } from 'react'
import InputChallenge from './InputChallenge'
import InputFinishdate from './InputFinishdate'
import ContainerImages from './ContainerImages'

import styled from 'styled-components'

const StyleSetupScreen = styled.section`
  display: grid;
  grid-template-rows: auto 50px;
  justify-content: center;
  justify-items: center;
  align-content: center;
  grid-gap: 10px;
  background: linear-gradient(
    to bottom,
    #d8e9f8 24%,
    #8ec0ec 56%,
    #66beea 79%,
    #73b1e7 92%,
    #9ec9ee 100%
  );

  a:any-link {
    text-decoration: none;
  }
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
