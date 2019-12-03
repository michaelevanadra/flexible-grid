import React, { Component } from 'react';

import Child from '../Child/child';

import * as P from './style';

class Parent extends Component {
  render() {
    const { id, items, direction, children } = this.props;

    return (
      <P.Wrapper id={id} direction={direction}>
        {children}
        {items &&
          items.map((item, index) => (
            <Child
              key={index}
              id={item.id}
              items={item.items}
              direction={item.direction}
              grow={item.grow}
              shrink={item.shrink}
              basis={item.basis}
              order={item.order}
              border={item.border}
            />
          ))}
      </P.Wrapper>
    );
  }
}

export default Parent;
