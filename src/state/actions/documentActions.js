export const SET_DOCUMENT = 'SET_DOCUMENT';
export const GET_DOCUMENT = 'GET_DOCUMENT';

export const setDocument = documentData => dispatch => {
  dispatch({
    type: SET_DOCUMENT,
    payload: documentData,
  });
};

export const getDocument = documentData => dispatch => {
  dispatch({
    type: GET_DOCUMENT,
    payload: documentData,
  });
};
