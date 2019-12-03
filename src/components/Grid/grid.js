import React, { Component } from 'react';

import { sampleGridConfig } from '../../config/grid';

import Parent from './Parent/parent';

import * as G from './style';

class Grid extends Component {
  render() {
    return (
      <G.Wrapper
        id={sampleGridConfig.id}
        direction={sampleGridConfig.direction}
      >
        {sampleGridConfig.items &&
          sampleGridConfig.items.map((item, index) => (
            <Parent
              key={index}
              id={item.id}
              items={item.items}
              direction={item.direction}
              grow={item.grow}
            />
          ))}
      </G.Wrapper>
    );
  }
}

export default Grid;
