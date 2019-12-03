import React, { useState } from 'react';
import {
  CardText,
  CardBody,
  CardSubtitle,
  Button,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

import { GridParent, GridChild } from '../Grid';

import * as A from './style';

function SampleGrid() {
  const [dropdownOpen, setOpen] = useState(false);
  const [direction, setDirection] = useState('row');

  const toggle = () => setOpen(!dropdownOpen);

  return (
    <>
      <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>GridParent - Direction</DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={() => setDirection('row')}>Row</DropdownItem>
          <DropdownItem onClick={() => setDirection('row-reverse')}>
            Row-Reverse
          </DropdownItem>
          <DropdownItem onClick={() => setDirection('column')}>
            Column
          </DropdownItem>
          <DropdownItem onClick={() => setDirection('column-reverse')}>
            Column-Reverse
          </DropdownItem>
          <DropdownItem onClick={() => setDirection('initial')}>
            Initial
          </DropdownItem>
          <DropdownItem onClick={() => setDirection('inherit')}>
            Inherit
          </DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>

      <GridParent id="parent" direction={direction}>
        <GridChild>
          <A.Card>
            <CardBody>
              <A.CardTitle>Card title 1</A.CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </A.Card>
        </GridChild>
        <GridChild>
          <A.Card>
            <CardBody>
              <A.CardTitle>Card title 2</A.CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </A.Card>
        </GridChild>
        <GridChild>
          <A.Card>
            <CardBody>
              <A.CardTitle>Card title 3</A.CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </A.Card>
        </GridChild>
        <GridChild>
          <A.Card>
            <CardBody>
              <A.CardTitle>Card title 4</A.CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </A.Card>
        </GridChild>
      </GridParent>
    </>
  );
}
export default SampleGrid;
