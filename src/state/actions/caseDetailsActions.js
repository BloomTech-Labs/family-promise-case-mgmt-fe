export const GET_CASE_DETAILS = 'GET_CASE_DETAILS';

export const getCaseDetails = caseID => dispatch => {
  dispatch({
    type: GET_CASE_DETAILS,
    payload: caseID,
  });
};
