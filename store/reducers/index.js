import { combineReducers } from 'redux';
// reducers
import { greeting } from './greeting';

//combine reducers
export const rootReducer = combineReducers({
    greeting
});