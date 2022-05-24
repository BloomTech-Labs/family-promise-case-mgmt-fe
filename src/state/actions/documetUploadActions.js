export const EDIT_DOCUMENT = 'EDIT_DOCUMENT';
export const ADD_DOCUMENT = 'ADD_DOCUMENT';
export const GET_DOCUMENTS = 'GET_DOCUMENTS';

export const editDocument = data => {
  return {
    type: EDIT_DOCUMENT,
    payload: data,
  };
};

export const addDocument = data => {
  return {
    type: ADD_DOCUMENT,
    payload: data,
  };
};

export const getDocuments = () => {
  return {
    type: GET_DOCUMENTS,
  };
};
