export const ADD_DOCUMENT = 'ADD_DOCUMENT';
export const SET_DOCUMENTS = 'SET_DOCUMENTS';
export const REMOVE_DOCUMENT = 'REMOVE_DOCUMENT';

export const addDocument = data => {
  return {
    type: ADD_DOCUMENT,
    payload: data,
  };
};

export const setDocuments = data => {
  return {
    type: SET_DOCUMENTS,
    payload: data,
  };
};

export const removeDocument = data => {
  return {
    type: REMOVE_DOCUMENT,
    payload: data,
  };
};
