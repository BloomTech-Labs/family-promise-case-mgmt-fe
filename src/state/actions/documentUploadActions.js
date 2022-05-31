export const EDIT_DOCUMENT = 'EDIT_DOCUMENT';
export const ADD_DOCUMENTS = 'ADD_DOCUMENTS';
export const GET_DOCUMENTS = 'GET_DOCUMENTS';

export const editDocument = data => {
  return {
    type: EDIT_DOCUMENT,
    payload: data,
  };
};

export const addDocuments = data => {
  return {
    type: ADD_DOCUMENTS,
    payload: data,
  };
};

export const getDocuments = () => {
  return {
    type: GET_DOCUMENTS,
  };
};
