import { combineReducers } from 'redux';

import {
  authReducer,
  navReducer,
  articlesReducer,
  singleArticleReducer,
  homeReducer,
  userReducer,
  forgotPasswordReducer
} from '../modules';

export default combineReducers({
  authReducer,
  navReducer,
  articlesReducer,
  singleArticleReducer,
  homeReducer,
  userReducer,
  forgetPassword: forgotPasswordReducer
});
