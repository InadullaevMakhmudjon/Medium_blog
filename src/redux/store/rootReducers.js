import { combineReducers } from 'redux';
import {
  authReducer,
  navReducer,
  articlesReducer,
  singleArticleReducer,
  homeReducer,
  userReducer
} from '../modules';


export default combineReducers({
  authReducer,
  navReducer,
  articlesReducer,
  singleArticleReducer,
  homeReducer,
  userReducer
});
