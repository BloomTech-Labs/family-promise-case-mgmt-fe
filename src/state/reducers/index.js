import { combineReducers } from 'redux';

import { reducer as client } from './clientReducer';
import { reducer as documents } from './documentReducer';

const rootReducer = combineReducers({
  client,
  documents,
});

export default rootReducer;
