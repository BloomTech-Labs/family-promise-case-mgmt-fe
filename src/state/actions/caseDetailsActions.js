export const GET_CASE_DETAILS = 'GET_CASE_DETAILS';
// test action
export const LOG_SUCCESS = 'LOG_SUCCESS';

export const getCaseDetails = caseID => dispatch => {
  dispatch({
    type: GET_CASE_DETAILS,
    payload: caseID,
  });
};

// test action
export const logSuccess = message => {
  console.log(message);
  return {
    type: LOG_SUCCESS,
    payload: message,
  };
};
