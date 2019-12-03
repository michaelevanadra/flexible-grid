import styled from 'styled-components';

export const Wrapper = styled.div`
  height: inherit;
  display: flex;
  flex: 1;
  flex-direction: ${props => props.direction};
`;
