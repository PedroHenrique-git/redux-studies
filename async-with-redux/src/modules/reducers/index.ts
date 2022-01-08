import { combineReducers } from "redux";
import addressReducer from '../slicers/addressReducers';

export default combineReducers({
    addresses: addressReducer
});