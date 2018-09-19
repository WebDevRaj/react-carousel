import React, { Component } from 'react';
import styled from 'styled-components'
import Carousel from './Carousel/Carousel'

import "./App.css";

const Item = styled.div`
  width: 100%;
  height: 100%;
`
export default class CarouselPage extends Component {
  render() {
    return (
      <div style={{
        height: "80%",
        width: "750px",
        margin: "50px auto"
      }}>
        <Carousel
          title="Carousel"
        >
          <Item>
            <img src="https://images.unsplash.com/photo-1524027556923-66e7ec51e251?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2125b2ecf005515f7701153a086d4789&auto=format&fit=crop&w=750&q=80" alt=""/>
          </Item>
          <Item>
            <img src="https://images.unsplash.com/photo-1523978591478-c753949ff840?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c92fa17c403874495c84c6f31f5ef403&auto=format&fit=crop&w=750&q=80" alt=""/>
          </Item>
          <Item>
            <img src="https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=01a9a264e737622958245b0f55a6e943&auto=format&fit=crop&w=750&q=80" alt=""/>
          </Item>
          <Item>
            <img src="https://images.unsplash.com/photo-1516692935701-4f35bff8b9f6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5e8b07db9ad1b8626288bbbf77471558&auto=format&fit=crop&w=750&q=80" alt=""/>
          </Item>
        </Carousel>
      </div>
    );
  }
}