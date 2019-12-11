import styled from 'styled-components';

export const Section = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};

  ${props => props.border && `border: ${props.border}`};
  ${props => props.wrap && `flex-wrap: ${props.wrap}`};
  ${props => !props.grow && !props.shrink && 'flex: 1;'}
  ${props => props.grow && `flex-grow: ${props.grow};`}
  ${props => props.shrink && `flex-shrink: ${props.shrink};`}
  ${props => props.basis && `flex-basis: ${props.basis};`}
  ${props => props.order && `order: ${props.order};`}
  ${props => props.width && `width: ${props.width}`};
`;

export const Card = styled.div`
  border-radius: 5px;
  padding: 15px;
  margin: 5px;
  width: 100%;
  border: 1px solid ${props => (props.theme === 'dark' ? '#fff' : '#ccc')};
  background: ${props => (props.theme === 'dark' ? '#fff' : '#ccc')};
`;

export const Center = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
