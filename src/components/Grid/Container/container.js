import React, { Component } from 'react';

import Cell from '../Cell';

import * as C from './style';

class Container extends Component {
  render() {
    const { id, children, direction } = this.props;

    return (
      <C.Wrapper id={id} direction={direction}>
        {children &&
          children.map((child, index) => (
            <Cell
              key={index}
              id={child.id}
              children={child.children}
              direction={child.direction}
              grow={child.grow}
              shrink={child.shrink}
              basis={child.basis}
              order={child.order}
            />
          ))}
      </C.Wrapper>
    );
  }
}

export default Container;
