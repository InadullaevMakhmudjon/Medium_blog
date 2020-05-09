import actionTypes from '../../../constants/action-types';

const defaultState = {
  loading: false,
  loader: false,
  error: false,
  token: '',
  loginError: false
};

const map = {
  [`${actionTypes.GET_TOKEN}${actionTypes.PENDING}`]: (state) => ({
    ...state,
    loading: true
  }),
  [`${actionTypes.GET_TOKEN}${actionTypes.FULFILLED}`]: (state, { payload }) => ({
    ...state,
    loading: false,
    token: payload.data.token
  }),
  [`${actionTypes.GET_TOKEN}${actionTypes.REJECTED}`]: (state) => ({
    ...state,
    loading: false,
    error: true
  }),
  [`${actionTypes.LOGIN}${actionTypes.PENDING}`]: (state) => ({
    ...state,
    loader: true,
    loginError: false
  }),
  [`${actionTypes.LOGIN}${actionTypes.FULFILLED}`]: (state, payload) => ({
    ...state,
    token: payload.token,
    loader: false,
    loginError: false
  }),
  [`${actionTypes.LOGIN}${actionTypes.REJECTED}`]: (state, payload) => ({
    ...state,
    loginError: true,
    loader: false
  }),
  [actionTypes.WRITE_TOKEN]: (state, { payload }) => ({
    ...state,
    token: payload
  })
};

export default function authReducer(state = defaultState, action) {
  return (map[action.type] && map[action.type](state, action)) || state;
}
