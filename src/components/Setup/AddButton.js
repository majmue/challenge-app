import React, { Component } from 'react'

import styled from 'styled-components'

const StyleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 200px;
  background-color: #7f0524;
  text-shadow: 0 -1px #2980b9;
  color: white;
`

export default class AddButton extends Component {
  render() {
    return <StyleButton>Add</StyleButton>
  }
}
