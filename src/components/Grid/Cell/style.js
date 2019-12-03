import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #152642;
  margin: 3px;
  color: white;

  ${props => !props.grow && !props.shrink && 'flex: 1;'}
  ${props => props.grow && `flex-grow: ${props.grow};`}
  ${props => props.shrink && `flex-shrink: ${props.shrink};`}
  ${props => props.basis && `flex-basis: ${props.basis};`}
  ${props => props.order && `order: ${props.order};`}
`;
