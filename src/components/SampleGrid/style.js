import styled from 'styled-components';
import { Card as BSCard, CardTitle as BSCardTitle } from 'reactstrap';

export const Card = styled(BSCard)`
  && {
    border: 1px solid red;
    margin: 5px;
  }
`;

export const CardTitle = styled(BSCardTitle)`
  && {
    color: red;
  }
`;
