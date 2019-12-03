import React, { Component } from 'react';

import Container from '../Container';
import * as C from './style';

class Cell extends Component {
  render() {
    const { id, children, direction, grow, shrink, basis, order } = this.props;

    if (children) {
      return <Container id={id} children={children} direction={direction} />;
    } else {
      return (
        <C.Wrapper
          id={id}
          grow={grow}
          shrink={shrink}
          basis={basis}
          order={order}
        >
          <span>{id}</span>
          <span>{grow && `grow: ${grow}`}</span>
          <span>{shrink && `shrink: ${shrink}`}</span>
          <span>{basis && `basis: ${basis}`}</span>
          <span>{order && `order: ${order}`}</span>
        </C.Wrapper>
      );
    }
  }
}

export default Cell;
