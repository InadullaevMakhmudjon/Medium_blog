import actionTypes from '../../../constants/action-types';

const defaultState = {
  loading: false,
  error: false,
  home: [],
  total: null

};

const map = {
  [`${actionTypes.GET_HOME}${actionTypes.PENDING}`]: (state) => ({
    ...state,
    loading: true
  }),
  [`${actionTypes.GET_HOME}${actionTypes.FULFILLED}`]: (state, { payload }) => ({
    ...state,
    loading: false,
    error: false,
    home: state.home.length ? [...state.home, ...payload.data.data] : payload.data.data,
    total: payload.data.total
  }),
  [`${actionTypes.GET_HOME}${actionTypes.REJECTED}`]: (state) => ({
    ...state,
    loading: false,
    error: true
  })
};

export default function singleArticleReducer(state = defaultState, action) {
  return (map[action.type] && map[action.type](state, action)) || state;
}
