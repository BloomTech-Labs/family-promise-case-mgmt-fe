import { combineReducers } from 'redux';

import { reducer as client } from './clientReducer';
import { reducer as document } from './documentReducer';

const rootReducer = combineReducers({
  client,
  document,
});

export default rootReducer;
