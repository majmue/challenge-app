import React, { Component } from 'react'

import img1 from '../../images/bekir-donmez-335320-unsplash.jpg'
// import img2 from '../../images/daniel-olah-432079-unsplash.jpg'
// import img3 from '../../images/eberhard-grossgasteiger-382452-unsplash.jpg'
// import img4 from '../../images/brynden-429043-unsplash.jpg'

import styled from 'styled-components'

const StyleContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  height: auto;
  width: 200px;

  background-color: #efefef;
  border: 1px solid #7f0524;

  .img {
    height: 99px;
    width: 99px;
    padding: 2px;

    &.selected {
      outline: 4px solid white;
    }
  }

  .name {
    padding: 5px;
    font-size: 10pt;
    width: 200px;
    border-bottom: 1px solid #7f0524;
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
        {/* <img
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
        /> */}
      </StyleContainer>
    )
  }
}
