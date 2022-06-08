import { contactPreferences } from '../actions';

const intialState = {};

export const reducer = (state = intialState, action) => {
  switch (action.type) {
    case contactPreferences.SET_CONTACT_PREFERENCES:
      return action.payload;

    default:
      return state;
  }
};
