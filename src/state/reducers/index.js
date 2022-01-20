// import all of your reducers into this file, and export them back out. 
// This allows for the simplification of flow when importing reducers into your actions throughout your app.

import { combineReducers } from 'redux';

import { reducer as client } from './clientReducer';

const rootReducer = combineReducers({
    // add reducers here
    client
});

export default rootReducer;
