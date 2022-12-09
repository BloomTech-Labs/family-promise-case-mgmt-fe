import { setProfile } from '../actions';

const intialState = {
  id: null,
  email: '',
  name: '',
};

export const reducer = (state = intialState, action) => {
  switch (action.type) {
    case setProfile.SET_PROFILE:
      return action.payload;
    default:
      return state;
  }
};
