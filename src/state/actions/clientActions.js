export const SET_CLIENT = 'SET_CLIENT';

export const setClient = clientData => {
  return {
    type: SET_CLIENT,
    payload: clientData,
  };
};
