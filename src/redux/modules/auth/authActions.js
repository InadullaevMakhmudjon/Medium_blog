import axios from 'axios';

import actionTypes from '../../../constants/action-types';
import { API_URL } from '../../../config';

export const tokenLocalToRedux = (token) => ({
  type: actionTypes.WRITE_TOKEN,
  payload: token
});

export const init = () => (dispatch) => {
  const token = localStorage.getItem('token');
  if (token) {
    dispatch({
      type: actionTypes.WRITE_TOKEN,
      payload: token
    });
  } else {
    const response = dispatch({
      type: actionTypes.GET_TOKEN,
      payload: axios({
        method: 'GET',
        url: `${API_URL}/auth/login`
      })
    });

    response.then((res) => {
      if (res && res.value && res.value.data && res.value.data.token) {
        localStorage.setItem('token', res.value.data.token);
      }
    });
  }
};

export const login = (phone, password, history) => (dispatch) => {
  const response = dispatch({
    type: actionTypes.LOGIN,
    payload: axios({
      method: 'POST',
      url: `${API_URL}/auth/login`,
      data: {
        phone: `+${phone}`,
        password
      }
    })
  });

  response.then((res) => {
    if (res && res.value && res.value.data && res.value.data.token) {
      localStorage.setItem('token', res.value.data.token);
      history.push('/');
    }
  });
};

export const logout = (history) => (dispatch) => {
  localStorage.removeItem('token');
  dispatch({
    type: actionTypes.LOGOUT
  });

  history.push('/');
};
