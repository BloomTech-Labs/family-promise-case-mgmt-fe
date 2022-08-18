import { document } from '../actions';

const intialState = {};

export const reducer = (state = intialState, action) => {
  switch (action.type) {
    case document.ADD_DOCUMENT:
      const updatedState = { ...state };
      updatedState[action.payload[0]] = action.payload[1];
      return updatedState;

    case document.SET_DOCUMENTS:
      console.log(action.payload);
      return action.payload;

    case document.REMOVE_DOCUMENT:
      const newState = {};
      Object.entries(state).forEach(document => {
        if (document[0] !== action.payload.documentType) {
          newState[document[0]] = document[1];
        }
      });
      return newState;

    default:
      return state;
  }
};
