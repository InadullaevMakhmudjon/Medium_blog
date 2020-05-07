import axios from 'axios';

import { getHeaders } from '../../../utils/index';
import actionTypes from '../../../constants/action-types';

import { API_URL } from '../../../config';

export const getRecommendedArticles = ({
  categoryId, filter, sortDr, page, limit
}) => (dispatch, getState) => {
  const { token } = getState().authReducer;

  if (token) {
    dispatch({
      type: actionTypes.GET_CATEGORY_RECOMMENDED,
      payload: axios({
        method: 'GET',
        url: `${API_URL}/categories/${categoryId}/articles?${filter}=${sortDr}&page=${page}&limit=${limit}`,
        headers: getHeaders(getState)
      })
    });
  }
};

export const getArticles = ({
  categoryId,
  filter,
  sortDr,
  page,
  limit
}) => (dispatch, getState) => {
  const obj = {
    categoryId,
    filter,
    sortDr,
    page,
    limit
  };
  const prevParams = getState().articlesReducer.params;
  const { token } = getState().authReducer;
  if (prevParams && (prevParams.categoryId !== categoryId || prevParams.filter !== filter)) {
    dispatch({
      type: actionTypes.CLEAR_DATA
    });
  }
  dispatch({
    type: actionTypes.CATEGORY_PARAMS,
    payload: {
      categoryId,
      filter,
      sortDr,
      page,
      limit
    }
  });
  if ((JSON.stringify(obj) !== JSON.stringify(prevParams) && token)) {
    dispatch({
      type: actionTypes.GET_CATEGORY,
      payload: axios({
        method: 'GET',
        url: `${API_URL}/categories/${categoryId}/articles?${filter}=${sortDr}&page=${page}&limit=${limit}`,
        headers: getHeaders(getState)
      })
    });
  }
};
