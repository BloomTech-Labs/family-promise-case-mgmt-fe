export const SET_REFERRALS = 'SET_REFERRALS';
export const DELETE_REFERRAL = 'DELETE_REFERRAL';
export const ADD_REFERRAL = 'ADD_REFERRAL';

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
