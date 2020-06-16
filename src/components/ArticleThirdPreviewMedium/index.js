import React from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import ReactImageFallback from 'react-image-fallback';

import {
  ArticlesContainer,
  ImageContainer,
  TextsHolder,
  ArticleTitle,
  SecondaryTitle,
  AuthorInfo,
  AuthorLocation,
  PublishInfo,
  PublishDate,
  StarIcon,
  ClamplinesStyled
} from './style';

import starIcon from '../../assets/icons/star.png';
import FallbackBackground from '../../assets/images/Fallback loader.png';

const ArticleThird = ({ article }) => {
  const history = useHistory();
  return (
    <ArticlesContainer onClick={() => history.push(article.route)}>
      <ImageContainer>
        <ReactImageFallback
          fallbackImage={FallbackBackground}
          src={article.image}
          initialImage={FallbackBackground}
          alt={article.description_uz}
          loading="lazy"
        />
      </ImageContainer>
      <TextsHolder>
        <ArticleTitle>
          <Link to={article.route}>
            <ClamplinesStyled
              text={article.title_uz}
              id={article.title_uz}
              lines={2}
              ellipsis="..."
              moreText=""
              lessText=""
              stopPropagation
            />
          </Link>
        </ArticleTitle>
        <SecondaryTitle>
          <ClamplinesStyled
            text={article.description_uz}
            id={article.title_uz}
            lines={2}
            ellipsis="..."
            moreText=""
            lessText=""
            stopPropagation
          />
        </SecondaryTitle>
        <AuthorInfo>
          {article.categories.map((i, idx) => (
            <AuthorLocation key={i.id || idx} to={i.route}>
              {i.label}
            </AuthorLocation>
          ))}
        </AuthorInfo>
        <PublishInfo>
          <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">{article.createdAt}</Tooltip>}>
            <span className="d-inline-block">
              <PublishDate style={{ hoverEvents: 'none' }}>{article.createdAt}</PublishDate>
            </span>
          </OverlayTrigger>
          <StarIcon>
            <img src={starIcon} alt="star-icon" />
          </StarIcon>
        </PublishInfo>
      </TextsHolder>
    </ArticlesContainer>
  );
};


ArticleThird.propTypes = {
  article: PropTypes.objectOf(PropTypes.any)
};

ArticleThird.defaultProps = {
  article: {}
};

export default ArticleThird;
