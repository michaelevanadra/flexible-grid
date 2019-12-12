import styled from 'styled-components';

// TODO: Lessen this code. Need to pass a parameter to 'styled' for reusability.
// NEED HELP!
export const div = styled.div`
  ${props => ({...props.style})}
`;

export const h1 = styled.h1`
  ${props => ({...props.style})}
`;

export const h2 = styled.h2`
  ${props => ({...props.style})}
`;

export const span = styled.span`
  ${props => ({...props.style})}
`;

//TODO: ADD MORE HTML TAGS HERE