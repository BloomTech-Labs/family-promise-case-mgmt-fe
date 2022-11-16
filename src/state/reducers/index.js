import { combineReducers } from 'redux';

import { reducer as client } from './clientReducer';
import { reducer as contactPreferences } from './contactPreferencesReducer';
import { reducer as referral } from './referralsReducer';
import { reducer as document } from './documentUploadReducer';
import { reducer as authToken } from './authTokenReducer';

const rootReducer = combineReducers({
  client,
  contactPreferences,
  referral,
  document,
  authToken,
});

export default rootReducer;
