import React from 'react';
import { Form } from 'react-bootstrap';

import {
  StyledContainer,
  Heading,
  Title,
  Col1,
  Col2,
  FormContainer,
  FormStyled1,
  FormStyled2,
  WrapperButton,
  Wrapper
} from './styles';

import ButtonCustom from '../Buttons/ButtonCustom/index';


const SearchSection = () => (
  <StyledContainer>
    <Col1>
      <Heading>Browse the Full Archive</Heading>
    </Col1>
    <Col2>
      <Title>FIND A SPECIFIC ISSUE</Title>
      <Wrapper>
        <FormContainer>
          <FormStyled1>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Control as="select">
                <option>2020</option>
                <option>2019</option>
                <option>2018</option>
                <option>2017</option>
                <option>2016</option>
              </Form.Control>
            </Form.Group>
          </FormStyled1>
          <FormStyled2>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Control as="select">
                <option>March-April</option>
                <option>January-February</option>
              </Form.Control>
            </Form.Group>
          </FormStyled2>
        </FormContainer>
        <WrapperButton>
          <ButtonCustom goBtn>Go</ButtonCustom>
        </WrapperButton>
      </Wrapper>
    </Col2>
  </StyledContainer>
);

export default SearchSection;
