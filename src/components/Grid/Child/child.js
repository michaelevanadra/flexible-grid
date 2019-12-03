import React, { Component } from 'react';

import Parent from '../Parent/parent';
import * as C from './style';

class Child extends Component {
  render() {
    const {
      id,
      items,
      direction,
      grow,
      shrink,
      basis,
      order,
      children,
      border
    } = this.props;

    if (items) {
      return <Parent id={id} items={items} direction={direction} />;
    } else {
      return (
        <C.Wrapper
          id={id}
          grow={grow}
          shrink={shrink}
          basis={basis}
          order={order}
          border={border}
        >
          {children}
          {id && <span>id: {id}</span>}
          {grow && <span>grow: {grow}</span>}
          {shrink && <span>shrink: {shrink}</span>}
          {basis && <span>basis: {basis}</span>}
          {order && <span>order: {order}</span>}
        </C.Wrapper>
      );
    }
  }
}

export default Child;
