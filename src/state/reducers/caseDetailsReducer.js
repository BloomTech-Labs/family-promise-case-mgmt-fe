import { caseDetails } from '../actions';

const intialState = {
  id: 1,
  name: 'test',
  status: 'active',
};

export const reducer = (state = intialState, action) => {
  switch (action.type) {
    case caseDetails.GET_CASE_DETAILS:
      return {
        ...state,
      };
    default:
      return state;
  }
};
