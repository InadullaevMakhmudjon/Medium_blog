import { createSelector } from 'reselect';
import moment from 'moment';
import { labelToRoute } from '../../utils';

export const homeList = (state) => state.homeReducer.home;

export const currentArticles = (state) => state.homeReducer.home;


export const recommendedArticlesList = (state) => state.articlesReducer.recommendedArticles;

const totalCounter = (state) => state.homeReducer.total;

const createFormattedArticle = (item) => ({
  id: item.id,
  route: `/articles/${item.slug}`,
  title_uz: item.title_uz,
  title_kr: item.title_kr,
  image: item.image,
  description_kr: item.description_kr,
  description_uz: item.description_uz,
  createdAt: moment(item.createdAt).format('MMM Do YYYY'),
  metaFields: item.metaFields,
  categories: item.categories.map((category) => ({
    id: category.id,
    label: category.name,
    route: labelToRoute(`/category/${category.name}`)
  }))
});

export const articleTopSelector = createSelector(
  homeList,
  (list) => (list.length ? list.slice(0, 5).map(createFormattedArticle) : [])
);

export const articlesBottomSelector = createSelector(
  homeList,
  (list) => (list.length ? list.slice(5).map(createFormattedArticle) : [])
);

export const totalCounterSelector = createSelector(
  totalCounter,
  (count) => (count || 0)
);


export const currentArticlesCount = createSelector(
  currentArticles,
  (articles) => articles.length
);
