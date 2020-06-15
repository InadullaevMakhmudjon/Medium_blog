import React from 'react';
import PropTypes from 'prop-types';

import {
  ArticleMainPreview, ArticleSecondPreview, ArticleThirdPreview, TopArticlesStyled
} from './styles';

import Article from '../ArticlesComponentMedium/index';
import ArticleRowTwo from '../ArticleRowTwoMedium/index';
import ArticleThird from '../ArticleThirdPreviewMedium/index';


const TopArticlesContainer = ({ articles }) => (
  <TopArticlesStyled>
    <ArticleMainPreview>
      <Article article={articles.slice(0, 1)[0]} />
    </ArticleMainPreview>

    <ArticleSecondPreview>
      {articles.slice(1, 4).map((article) => <ArticleRowTwo key={article.id} article={article} />)}
    </ArticleSecondPreview>

    <ArticleThirdPreview>
      <ArticleThird article={articles.slice(4, 5)[0]} />
    </ArticleThirdPreview>

  </TopArticlesStyled>
);

TopArticlesContainer.defaultProps = {
  articles: []
};

TopArticlesContainer.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any))
};

export default TopArticlesContainer;
