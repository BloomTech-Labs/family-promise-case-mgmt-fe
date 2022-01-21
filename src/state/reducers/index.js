import { combineReducers } from 'redux';

import { reducer as client } from './clientReducer';

const rootReducer = combineReducers({
    client
});

export default rootReducer;
