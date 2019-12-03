import React, { Component } from 'react';

import { sampleGridConfig } from '../../config/grid';

import Container from './Container';

import * as G from './style';

class Grid extends Component {
  render() {
    return (
      <G.Wrapper
        id={sampleGridConfig.id}
        direction={sampleGridConfig.direction}
      >
        {sampleGridConfig.children &&
          sampleGridConfig.children.map((child, index) => (
            <Container
              key={index}
              id={child.id}
              children={child.children}
              direction={child.direction}
              grow={child.grow}
            />
          ))}
      </G.Wrapper>
    );
  }
}

export default Grid;
