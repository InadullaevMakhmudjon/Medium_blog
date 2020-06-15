import React from 'react';

import {
  StyledContainer,
  Row,
  Col1,
  Col2,
  Title
} from './styles';

import {
  HeadingSmall,
  Price
} from '../constant.styles';

import ButtonCustom from '../buttons/ButtonCustom';
import SocialShareButton from '../SocialMediaShare/index';

import ImageArticle from '../../assets/images/Fallback loader.png';

const RecommendedArticle = () => (
  <StyledContainer>
    <Row>
      <Col1>
        <img src={ImageArticle} alt="arti cle" />
      </Col1>
      <Col2>
        <HeadingSmall>You at Work: Doing Your Best Work Remotely</HeadingSmall>
        <Title>PRESS TOOLKIT</Title>
        <Price>$24.95</Price>
        <ButtonCustom viewDetails>View Details</ButtonCustom>
      </Col2>
    </Row>
    <SocialShareButton />
  </StyledContainer>
);

export default RecommendedArticle;
