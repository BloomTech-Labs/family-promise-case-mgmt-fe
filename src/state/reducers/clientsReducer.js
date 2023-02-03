import { clients } from '../actions';

const intialState = [];

export const reducer = (state = intialState, action) => {
  switch (action.type) {
    case clients.SET_CLIENTS:
      return [...action.payload];
    default:
      return state;
  }
};
