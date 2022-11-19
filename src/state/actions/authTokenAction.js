export const SET_TOKEN = 'SET_TOKEN';

export const setAuthToken = token => {
  return {
    type: SET_TOKEN,
    payload: token,
  };
};
