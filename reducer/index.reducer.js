/**
 * @name redux/index.js
 * @description root reducer
 * @version 0.0.0
 */

 import { userReducer } from './users.reducer';

 const { combineReducers } = require('redux');
 
 const reducer = combineReducers({
    userReducer,
 });
 
 export default reducer;
 