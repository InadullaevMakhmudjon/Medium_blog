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


export const updateUser = (data) => (dispatch, getState) => {
  const { token } = getState().authReducer;
  const { user } = getState().userReducer;
  if (token && user) {
    const { phone, ...user } = data;
    dispatch({
      type: actionTypes.UPDATE_USER,
      payload: axios({
        method: 'POST',
        url: `${API_URL}/users/${user.id}`,
        headers: getHeaders(getState),
        data: {
          ...user
        }
      })
    });
  }
};
