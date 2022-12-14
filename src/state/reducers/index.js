import { combineReducers } from 'redux';

// import { reducer as client } from './clientReducer';
import { reducer as contactPreferences } from './contactPreferencesReducer';
import { reducer as referral } from './referralsReducer';
import { reducer as document } from './documentUploadReducer';

const rootReducer = combineReducers({
  contactPreferences,
  referral,
  document,
});

export default rootReducer;
