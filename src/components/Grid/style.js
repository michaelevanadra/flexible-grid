import styled from 'styled-components';

export const Wrapper = styled.div`
  border: 5px solid #506680;
  display: flex;
  flex-direction: ${props => props.direction};
  height: 100%;
`;
