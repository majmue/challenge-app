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
  width: 350px;
  background-color: #efefef;
  font-size: 12pt;
  color: #5c5d61;
  border-style: inset;
  border-color: initial;
  border-image: initial;
  border-radius: 10px;
  border-width: 0.5px;

  .img {
    height: 172px;
    width: 170px;
    padding: 5px 5px 5px 5px;
    margin: 2px;

    &.selected {
      outline: 2px solid #4089ee;
    }
  }

  .name {
    padding: 5px;
    width: 200px;
    padding-bottom: 15px;
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
              data-cy="InputImage"
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
