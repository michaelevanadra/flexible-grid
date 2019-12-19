import styled from 'styled-components';
import StyleType from '../../config/template';


// TODO: Lessen this code. Need to pass a parameter to 'styled' for reusability.
// NEED HELP!
export const div = styled.div`
  ${props => {
    return StyleType[props.styleType] ? {...StyleType[props.styleType].style, ...props.style} : {...props.style};
  }}
`;

export const h1 = styled.h1`
  ${props => {
    return StyleType[props.styleType] ? {...StyleType[props.styleType].style, ...props.style} : {...props.style};
  }}
`;

export const h2 = styled.h2`
  ${props => (StyleType[props.styleType] ? {...StyleType[props.styleType].style, ...props.style} : {...props.style})}
`;

export const span = styled.span`
  ${props => (StyleType[props.styleType] ? {...StyleType[props.styleType].style, ...props.style} : {...props.style})}
`;

//TODO: ADD MORE HTML TAGS HERE