export const SET_PROFILE = 'SET_PROFILE';

export const setProfile = profile => {
  return {
    type: SET_PROFILE,
    payload: profile,
  };
};
