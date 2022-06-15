import { client } from '../actions';

const intialState = {
  id: 0,
  name: 'test',
  status: 'active',
};

export const reducer = (state = intialState, action) => {
  switch (action.type) {
    case client.SET_CLIENT:
      return action.payload;
    default:
      return state;
  }
};
