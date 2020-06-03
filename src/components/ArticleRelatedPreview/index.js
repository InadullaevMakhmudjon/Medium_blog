import React from 'react';

import Spinner from '../spinner';
import ArticleRelated from '../ArticlesRelated/index';

import { StyledContainer, Row } from './styles';
import { TitlesOfSections } from '../constant.styles';

const ArticleRelatedPreview = ({ articles, loading }) => (
  <StyledContainer>
    <TitlesOfSections>Related Articles</TitlesOfSections>

    {articles && (
      <Row>
        {articles.map((article, index) => (
          <ArticleRelated
            key={article.id || index}
            article={article}
          />
        ))}
      </Row>
    )}
    {loading && <Spinner />}
  </StyledContainer>
);

export default ArticleRelatedPreview;
