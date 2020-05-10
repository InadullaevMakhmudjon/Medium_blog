import axios from 'axios';

import { getHeaders } from '../../../utils/index';
import actionTypes from '../../../constants/action-types';

import { API_URL } from '../../../config';

export const getUser = (userId) => (dispatch, getState) => {
  const { token } = getState().authReducer;
  if (token) {
    dispatch({
      type: actionTypes.GET_USER,
      payload: axios({
        method: 'GET',
        url: `${API_URL}/users/${userId}`,
        headers: getHeaders(getState)
      })
    });
  }
};
