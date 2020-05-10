import actionTypes from '../../../constants/action-types';

const defaultState = {
  loading: false,
  error: false,
  user: null
};

const map = {
  [`${actionTypes.GET_USER}${actionTypes.PENDING}`]: (state) => ({
    ...state,
    loading: true
  }),
  [`${actionTypes.GET_USER}${actionTypes.FULFILLED}`]: (state, { payload }) => ({
    ...state,
    loading: false,
    user: payload.data
  }),
  [`${actionTypes.GET_USER}${actionTypes.REJECTED}`]: (state, action) => ({
    ...state,
    loading: false,
    error: true
  })

};

export default function userReducer(state = defaultState, action) {
  return (map[action.type] && map[action.type](state, action)) || state;
}
