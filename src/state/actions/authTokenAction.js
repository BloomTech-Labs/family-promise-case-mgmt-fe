export const GET_TOKEN = 'GET_TOKEN';

export const setAuthToken = token => {
  return {
    type: GET_TOKEN,
    payload: token,
  };
};
