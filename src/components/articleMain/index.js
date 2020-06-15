/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { useHistory, Link } from 'react-router-dom';
import ClampLines from 'react-clamp-lines';


import { useWindowSize } from '../../hooks/use-window-size';

import { createMarkup } from '../../utils';

import {
  StyledContainer,
  TextWrapper,
  ButtonsWrapper,
  Col1,
  DescribeStyled,
  MobileImgWrapperStyle,
  ClampLinesStyled
} from './style';

import ButtonString from '../buttons/ButtonString/index';
import ImageArticle from '../../assets/images/coronavirus-1.jpg';

const ArticleMain = ({ article, ...props }) => {
  const { width } = useWindowSize();
  const history = useHistory();
  return (
    <StyledContainer {...props} onClick={() => history.push(article.route)}>
      <Col1>
        <h2>
          <Link to={article.route}>
            <ClampLinesStyled
              text={article.title_uz}
              id={article.title_uz}
              lines={2}
              ellipsis="..."
              moreText=""
              lessText=""
              stopPropagation
            />
          </Link>
        </h2>
        <TextWrapper>
          <h3>
            {article.categories.map((item, index) => (
              <Link key={item.id || index} to={item.route}>
                {item.label}
              </Link>
            ))}
          </h3>
        </TextWrapper>
        {width < 600 && (
          <MobileImgWrapperStyle>
            <img src={ImageArticle} alt="article" />
          </MobileImgWrapperStyle>
        )}
        <ClampLinesStyled
          text={article.description_uz}
          id={article.description_uz}
          lines={3}
          ellipsis="..."
          moreText=""
          lessText=""
          stopPropagation
        />
        <ButtonsWrapper>
          <ButtonString homePageBtn saveShare save />
          <ButtonString homePageBtn saveShare />
        </ButtonsWrapper>
      </Col1>
      {width > 600 && <img src={ImageArticle} alt="article" />}
    </StyledContainer>
  );
};


ArticleMain.propTypes = {
  article: PropTypes.objectOf(PropTypes.any)

};

ArticleMain.defaultProps = {
  article: {}
};

export default ArticleMain;
