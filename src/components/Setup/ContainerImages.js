import React, { Component } from 'react'

import img1 from '../../images/bekir-donmez-335320-unsplash.jpg'
import img2 from '../../images/daniel-olah-432079-unsplash.jpg'
import img3 from '../../images/eberhard-grossgasteiger-382452-unsplash.jpg'
import img4 from '../../images/brynden-429043-unsplash.jpg'

import styled from 'styled-components'

const StyleContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  height: auto;
  width: 200px;
  background-color: #efefef;
  border-width: 2px 1px 2px 3px;
  border-style: inset;
  border-color: initial;
  border-image: initial;

  .img {
    height: 97px;
    width: 97px;
    padding: 3px;

    &.selected {
      outline: 4px solid white;
    }
  }

  .name {
    padding: 5px;
    font-size: 9pt;
    width: 200px;
    font-family: monospace;
  }
`

export default class ContainerImages extends Component {
  render() {
    return (
      <StyleContainer>
        <div className="name">Choose your picture:</div>
        <img
          className={this.props.selectedImage === img1 ? 'img selected' : 'img'}
          onClick={() => this.props.onClick(img1)}
          src={img1}
          alt="piled pebbles"
        />
        <img
          className={this.props.selectedImage === img2 ? 'img selected' : 'img'}
          onClick={() => this.props.onClick(img2)}
          src={img2}
          alt="sprint circle"
        />
        <img
          className={this.props.selectedImage === img3 ? 'img selected' : 'img'}
          onClick={() => this.props.onClick(img3)}
          src={img3}
          alt="mountain in fog"
        />
        <img
          className={this.props.selectedImage === img4 ? 'img selected' : 'img'}
          onClick={() => this.props.onClick(img4)}
          src={img4}
          alt="waves of water hit the beach"
        />
      </StyleContainer>
    )
  }
}
