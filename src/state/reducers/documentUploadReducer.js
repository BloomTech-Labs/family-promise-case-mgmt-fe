import { document } from '../actions';

const intialState = {};

export const reducer = (state = intialState, action) => {
  switch (action.type) {
    case document.EDIT_DOCUMENT:
      return action.payload;

    case document.ADD_DOCUMENT:
      return action.payload;

    default:
      return state;
  }
};
