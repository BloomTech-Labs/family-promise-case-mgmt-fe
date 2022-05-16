import { combineReducers } from 'redux';

import { reducer as client } from './clientReducer';
import { reducer as contactPreferences } from './contactPreferencesReducer';

const rootReducer = combineReducers({
  client,
  contactPreferences,
});

export default rootReducer;
