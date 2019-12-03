import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: ${props => props.direction || 'column'};

  ${props => props.border && `border: ${props.border}`};
  ${props => !props.grow && !props.shrink && 'flex: 1;'}
  ${props => props.grow && `flex-grow: ${props.grow};`}
  ${props => props.shrink && `flex-shrink: ${props.shrink};`}
  ${props => props.basis && `flex-basis: ${props.basis};`}
  ${props => props.order && `order: ${props.order};`}
`;
