export const SET_DOCUMENTS = 'SET_DOCUMENTS';
export const GET_DOCUMENTS = 'GET_DOCUMENTS';

export const setDocuments = documentData => dispatch => {
  dispatch({
    type: SET_DOCUMENTS,
    payload: documentData,
  });
};

export const getDocuments = documentData => dispatch => {
  dispatch({
    type: GET_DOCUMENTS,
    payload: documentData,
  });
};
