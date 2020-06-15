import axios from 'axios';
import actionTypes from '../../../constants/action-types';
import { getHeaders } from '../../../utils';

import { API_URL } from '../../../config';

export const getHome = (page) => (dispatch, getState) => {
  const { token } = getState().authReducer;
  if (token) {
    dispatch({
      type: actionTypes.GET_HOME,
      payload: axios({
        method: 'GET',
        url: `${API_URL}/articles?createdAt=DESC&limit=20&page=${page}`,
        headers: getHeaders(getState)
      })
    });
  }
};
