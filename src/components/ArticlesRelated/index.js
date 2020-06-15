import React from 'react';

import { Link } from 'react-router-dom';

import {
  StyledContainer,
  ImageWrapper,
  TextWrapper
} from './styles';

import {
  HeadingSmall,
  AuthorNameGrey,
  ArticleType
} from '../constant.styles';

import ImageArticle from '../../assets/images/Fallback loader.png';


const ArticleRelated = ({ article }) => (
  <StyledContainer>
    <ImageWrapper>
      <img src={ImageArticle} alt="article" />
    </ImageWrapper>
    <TextWrapper>
      <ArticleType>{article.categories.map((item, index) => <Link key={item.id || index} to={item.route}>{item.label}</Link>)}</ArticleType>
      <HeadingSmall><Link to={article.route}>{article.title_uz}</Link></HeadingSmall>
    </TextWrapper>
  </StyledContainer>
);

export default ArticleRelated;
