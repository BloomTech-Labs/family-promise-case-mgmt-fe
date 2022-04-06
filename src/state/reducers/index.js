import { combineReducers } from 'redux';

import { reducer as client } from './clientReducer';
// something weird going on with this import
import { reducer as caseDetails } from './caseDetailsReducer';

const rootReducer = combineReducers({
  client,
  caseDetails,
});

export default rootReducer;
