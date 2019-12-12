import React from 'react';
import * as StyledTags from './style';

function GenericComponent(props) {
  const StyledTag = StyledTags[props.element || 'div'];
  return <StyledTag {...props}>
    {props.content}
    {props.children &&  props.children.map(child => <GenericComponent {...child} />)}
  </StyledTag>;
}

export default GenericComponent;
