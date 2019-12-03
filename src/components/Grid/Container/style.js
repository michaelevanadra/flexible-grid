import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  border: 1px dashed #ccc;
  flex: 1;
  flex-direction: ${props => props.direction};
`;
