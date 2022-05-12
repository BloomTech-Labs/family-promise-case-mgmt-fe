export const SET_DOCUMENTS = 'SET_DOCUMENTS';
export const GET_DOCUMENTS = 'GET_DOCUMENTS';
export const SET_REFERRALS = 'SET_REFERRALS';
export const DELETE_REFERRAL = 'DELETE_REFERRAL';
export const ADD_REFERRAL = 'ADD_REFERRAL';

export const setDocuments = documentData => {
  return {
    type: SET_DOCUMENTS,
    payload: documentData,
  };
};

export const getDocuments = () => {
  return {
    type: GET_DOCUMENTS,
  };
};

export const setReferrals = referralData => {
  return {
    type: SET_REFERRALS,
    payload: referralData,
  };
};

export const addReferral = () => {
  return {
    type: ADD_REFERRAL,
  };
};

export const deleteReferral = index => {
  return {
    type: DELETE_REFERRAL,
    index: index,
  };
};
