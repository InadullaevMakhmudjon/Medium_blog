import React from 'react';
import PropTypes from 'prop-types';
import { useHistory, Link } from 'react-router-dom';
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
  ClampLinesStyled
} from './styles';

import FallbackBackground from '../../assets/images/Fallback loader.png';
import starIcon from '../../assets/icons/star.png';

const Article = ({ article }) => {
  const history = useHistory();
  return (
    <ArticlesContainer key={article.id} onClick={() => history.push(article.route)}>
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
        </ArticleTitle>
        <SecondaryTitle>
          <ClampLinesStyled
            text={article.description_uz}
            id={article.description_uz}
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


Article.propTypes = {
  article: PropTypes.objectOf(PropTypes.any)
};

Article.defaultProps = {
  article: {}
};

export default Article;
