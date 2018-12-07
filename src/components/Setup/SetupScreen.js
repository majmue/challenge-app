import React, { Component } from 'react'
import InputChallenge from './InputChallenge'
import InputFinishdate from './InputFinishdate'
import ContainerMilestones from './ContainerMilestones'
import OutputMilestones from './OutputMilestones'
import ContainerImages from './ContainerImages'

import logo from '../../images/me-now-logo.PNG'
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

const Logo = styled.img`
  display: flex;
  width: 150px;
  margin-bottom: 50px;
`

export default class SetupScreen extends Component {
  render() {
    const {
      changeDate,
      changeName,
      addMilestone,
      changeBackground,
      selectedImage
    } = this.props

    return (
      <StyleSetupScreen>
        <Logo src={logo} alt="Logo" />
        <InputChallenge onChange={changeName} />
        <ContainerMilestones onClick={addMilestone} />
        <OutputMilestones />
        <InputFinishdate onChange={changeDate} />
        <ContainerImages
          selectedImage={selectedImage}
          onClick={changeBackground}
        />
      </StyleSetupScreen>
    )
  }
}
