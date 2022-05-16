import { combineReducers } from 'redux';

import { reducer as client } from './clientReducer';
import { reducer as contactPreferences } from './contactPreferencesReducer';
import { reducer as referral } from './referralsReducer';

const rootReducer = combineReducers({
  client,
  contactPreferences,
  referral,
});

export default rootReducer;
