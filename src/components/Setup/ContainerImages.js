import React, { Component } from 'react'

import img1 from '../../images/bekir-donmez-335320-unsplash.jpg'
import img2 from '../../images/daniel-olah-432079-unsplash.jpg'
import img3 from '../../images/eberhard-grossgasteiger-382452-unsplash.jpg'
import img4 from '../../images/brynden-429043-unsplash.jpg'
import uid from 'uid'

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
      outline: 2px solid #4089ee;
    }
  }

  .name {
    padding: 5px;
    margin-bottom: 10px;
    font-size: 9pt;
    width: 200px;
    font-family: monospace;
  }
`

export default class ContainerImages extends Component {
  state = {
    images: [
      { path: img1, altText: 'piled pebbles' },
      { path: img2, altText: 'sprint circle' },
      { path: img3, altText: 'mountain in fog' },
      { path: img4, altText: 'waves of water hit the beach' }
    ]
  }

  render() {
    return (
      <StyleContainer>
        <div className="name">Choose your picture:</div>
        {this.state.images.map(img => {
          return (
            <img
              className={
                this.props.selectedImage === img.path ? 'img selected' : 'img'
              }
              onClick={() => this.props.onClick(img.path)}
              src={img.path}
              alt={img.altText}
              key={uid()}
            />
          )
        })}
      </StyleContainer>
    )
  }
}
