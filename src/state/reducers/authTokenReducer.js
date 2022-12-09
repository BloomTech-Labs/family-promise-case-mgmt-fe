import { setAuthToken } from '../actions';

const intialState = {};

export const reducer = (state = intialState, action) => {
  switch (action.type) {
    case setAuthToken.SET_TOKEN:
      return action.payload;
    default:
      return state;
  }
};
