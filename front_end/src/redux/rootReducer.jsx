// redux/rootReducer.js
import { combineReducers } from 'redux';
import authReducer from './auth/reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  // Add other reducers as needed
});

export default rootReducer;