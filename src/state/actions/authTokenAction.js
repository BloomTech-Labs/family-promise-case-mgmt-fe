export const GET_TOKEN = 'GET_TOKEN';

export const getAuthToken = token => {
  return {
    type: GET_TOKEN,
    payload: token,
  };
};
