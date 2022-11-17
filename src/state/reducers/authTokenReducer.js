import { setAuthToken } from '../actions';

const intialState = {};

export const reducer = (state = intialState, action) => {
  switch (action.type) {
    case setAuthToken.GET_TOKEN:
      return action.payload;
    default:
      return state;
  }
};
