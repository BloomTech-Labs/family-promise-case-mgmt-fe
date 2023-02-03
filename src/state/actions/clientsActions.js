export const SET_CLIENTS = 'SET_CLIENTS';
export const setClients = clients => dispatch => {
  dispatch({
    type: SET_CLIENTS,
    payload: clients,
  });
};
