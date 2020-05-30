import actionTypes from '../../../constants/action-types';

const defaultState = {
  loading: false,
  verify: false,
  error: false
};

const map = {
  [`${actionTypes.VERIFY_SEND}${actionTypes.PENDING}`]: (state) => ({
    ...state,
    loading: true
  }),
  [`${actionTypes.VERIFY_SEND}${actionTypes.FULFILLED}`]: (state) => ({
    ...state,
    loading: false,
    verify: true,
    error: false
  }),
  [`${actionTypes.VERIFY_SEND}${actionTypes.REJECTED}`]: (state) => ({
    ...state,
    loading: false,
    verify: false,
    error: true
  })
};

export default function userReducer(state = defaultState, action) {
  return (map[action.type] && map[action.type](state, action)) || state;
}
