import { getAuthToken } from '../actions/authTokenAction';

const intialState = '';

export const reducer = (state = intialState, action) => {
  switch (action.type) {
    case getAuthToken.GET_TOKEN:
      return action.payload;
    default:
      return state;
  }
};
