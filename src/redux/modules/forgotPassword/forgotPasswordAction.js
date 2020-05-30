import axios from 'axios';
import actionTypes from '../../../constants/action-types';

import { API_URL } from '../../../config';

export const verifySend = (phone) => (dispatch) => {
  dispatch({
    type: actionTypes.VERIFY_SEND,
    payload: axios({
      method: 'POST',
      url: `${API_URL}/verify/send`,
      data: {
        phone: `+${phone}`
      }
    })
  });
};

export const verifyCode = (phone, code) => (dispatch) => {
  dispatch({
    type: actionTypes.VERIFY_PHONE,
    payload: axios({
      method: 'POST',
      url: `${API_URL}/verify`,
      data: {
        phone: `+${phone}`,
        code: `${code}`
      }
    })
  });
};
