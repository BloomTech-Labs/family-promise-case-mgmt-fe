import { dispatch } from 'react-redux';
export const GET_CURRENT_USER = 'GET_CURRENT_USER';
export const GET_CLIENTS = 'GET_CLIENTS';
export const ERROR_ACTION = 'ERROR_ACTION';

export const getCurrentUser = userData => dispatch => {
  return {
    type: GET_CURRENT_USER,
    payload: userData,
  }.catch(err => {
    dispatch({
      type: ERROR_ACTION,
      payload: err.message,
    });
  });
};

export const getUsersClients = clientData => {
  return {
    type: GET_CLIENTS,
    payload: clientData,
  }.catch(err => {
    dispatch({
      type: ERROR_ACTION,
      payload: err.message,
    });
  });
};
