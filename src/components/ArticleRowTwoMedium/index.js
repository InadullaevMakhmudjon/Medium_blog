import React from 'react';
import PropTypes from 'prop-types';

import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import {
  ArticlesContainer,
  ImageContainer,
  TextsHolder,
  ArticleTitle,
  SecondaryTitle,
  AuthorInfo,
  AuthorName,
  AuthorLocation,
  PublishInfo,
  PublishDate,
  TimeOfReading,
  ImgWrapper,
  StarIcon
} from './style';

import Img from '../../assets/images/corona-2.jpg';
import IconSave from '../../assets/icons/save-icon.svg';
import starIcon from '../../assets/icons/star.png';


const ArticleRowTwo = ({ article }) => (
  <ArticlesContainer>
    <ImageContainer>
      <img src={Img} alt="article" />
    </ImageContainer>
    <TextsHolder>
      <ArticleTitle to={article.route}>
        {article.title_uz}
      </ArticleTitle>
      <SecondaryTitle>
        {article.description_uz}
      </SecondaryTitle>
      <AuthorInfo>
        {article.categories.map((i, idx) => (<AuthorLocation key={i.id || idx} to={i.route}>{i.label}</AuthorLocation>))}
      </AuthorInfo>
      <PublishInfo>
        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">{article.createdAt}</Tooltip>}>
          <span className="d-inline-block">
            <PublishDate style={{ hoverEvents: 'none' }}>
              {article.createdAt}
            </PublishDate>
          </span>
        </OverlayTrigger>
        <StarIcon>
          <img src={starIcon} alt="star-icon" />
        </StarIcon>
      </PublishInfo>
    </TextsHolder>
  </ArticlesContainer>
);

ArticleRowTwo.propTypes = {
  article: PropTypes.objectOf(PropTypes.any)
};

ArticleRowTwo.defaultProps = {
  article: {}
};

export default ArticleRowTwo;
