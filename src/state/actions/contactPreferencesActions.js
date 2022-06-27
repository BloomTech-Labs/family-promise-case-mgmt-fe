export const SET_CONTACT_PREFERENCES = 'SET_CONTACT_PREFERENCES';
export const GET_CONTACT_PREFERENCES = 'GET_CONTACT_PREFERENCES';

export const setContactPreferences = data => {
  return {
    type: SET_CONTACT_PREFERENCES,
    payload: data,
  };
};

export const getContactPreferences = () => {
  return {
    type: GET_CONTACT_PREFERENCES,
  };
};
