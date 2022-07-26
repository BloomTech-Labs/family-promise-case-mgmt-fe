export const DELETE_REFERRAL = 'DELETE_REFERRAL';
export const SAVE_REFERRAL = 'SAVE_REFERRAL';
export const EDIT_REFERRAL = 'EDIT_REFERRAL';

export const saveReferral = referralData => {
  return {
    type: SAVE_REFERRAL,
    payload: referralData,
  };
};

export const editReferral = (referralData, index) => {
  return {
    type: EDIT_REFERRAL,
    payload: referralData,
    index: index,
  };
};

export const deleteReferral = index => {
  return {
    type: DELETE_REFERRAL,
    index: index,
  };
};
