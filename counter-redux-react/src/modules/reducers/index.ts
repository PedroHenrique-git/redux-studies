import { combineReducers } from "redux";
import { counterReducer, counterReducer2 } from './counterReducer';

export default combineReducers({
    counter: counterReducer,
    counter2: counterReducer2
});