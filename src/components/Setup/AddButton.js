import React, { Component } from 'react'

import styled from 'styled-components'

const StyleButton = styled.button`
  display: flex;
  align-items: center;
  justify-items: center;
  height: 30px;
  width: 40px;
  background: #e2083f;
  border-radius: 10%;
  text-shadow: 0px -1px #2980b9;
  color: white;
`

export default class AddButton extends Component {
  render() {
    return <StyleButton>Add</StyleButton>
  }
}
