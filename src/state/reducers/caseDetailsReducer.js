import { caseDetails } from '../actions';

const intialState = {
  id: 1,
  name: 'test',
  status: 'active',
  testMessage: '',
};

export const reducer = (state = intialState, action) => {
  switch (action.type) {
    case caseDetails.GET_CASE_DETAILS:
      return {
        ...state,
      };
    // test case
    case caseDetails.LOG_SUCCESS:
      return {
        ...state,
        testMessage: action.payload,
      };
    default:
      return state;
  }
};
