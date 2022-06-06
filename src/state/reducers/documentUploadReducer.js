import { document } from '../actions';

const intialState = {};

export const reducer = (state = intialState, action) => {
  switch (action.type) {

    case document.ADD_DOCUMENT:
      const updatedState = { ...state };
      updatedState[action.payload[0]] = action.payload[1];
      return updatedState;
    
    case document.SET_DOCUMENT:
      return action.payload

    default:
      return state;
  }
};
