import { document } from '../actions';

const intialState = {};

export const reducer = (state = intialState, action) => {
  switch (action.type) {
    case document.EDIT_DOCUMENT:
      return action.payload;

    case document.ADD_DOCUMENT:
      const updatedState = { ...state };
      updatedState[action.payload[0]] = action.payload[1];
      return updatedState;

    default:
      return state;
  }
};
