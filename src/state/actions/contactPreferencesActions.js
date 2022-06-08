export const SET_CONTACT_PREFERENCES = 'SET_CONTACT_PREFERENCES';

export const setContactPreferences = data => {
  return {
    type: SET_CONTACT_PREFERENCES,
    payload: data,
  };
};
