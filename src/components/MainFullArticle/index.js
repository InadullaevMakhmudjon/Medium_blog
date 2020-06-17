import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import ReactToPrint from 'react-to-print';

import Spinner from '../spinner';
import { createMarkup } from '../../utils';

import {
  StyledContainer,
  Header,
  HeadingStyled,
  TextWrapper,
  IconWrapper,
  ImageWrapper,
  Paragraph,
  ArticleType
} from './styles';

import {
  HeadingBig,
  HR,
  PublishTime
} from '../constant.styles';

import ButtonString from '../buttons/ButtonString/index';
import ImageArticle from '../../assets/images/Fallback loader.png';


const MainFullArticle = ({ article, loading }) => {
  const componentRef = useRef();

  return (
    <StyledContainer ref={componentRef}>
      {loading && <Spinner />}
      {article && (
        <>
          <Header>
            <TextWrapper>
              <ArticleType>
                {article.categories.map((item, index) => (
                  <Link key={item.id || index} to={item.route}>{item.label}</Link>
                ))}
              </ArticleType>
              <HeadingStyled>{article.title_uz}</HeadingStyled>
              <PublishTime>{article.createdAt}</PublishTime>
            </TextWrapper>
            <IconWrapper>
              <ButtonString homePageBtn saveShare save />
              <ButtonString homePageBtn saveShare />

              <ReactToPrint
                trigger={() => <ButtonString />}
                content={() => componentRef.current}
              />
            </IconWrapper>
            <ImageWrapper>
              <img src={ImageArticle} alt="" />
            </ImageWrapper>
          </Header>
          <HR />
          <Paragraph dangerouslySetInnerHTML={createMarkup(article.body_uz)} />
        </>
      )}
    </StyledContainer>
  );
};

export default MainFullArticle;
