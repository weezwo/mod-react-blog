import { combineReducers } from 'redux';

export default combineReducers({
    replaceMe: () => 'HI' // "tricks" redux into thinking we have a valid reducer
});