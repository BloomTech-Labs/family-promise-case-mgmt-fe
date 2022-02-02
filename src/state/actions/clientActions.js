export const SET_CLIENT = 'SET_CLIENT';
export const setClient = (clientData) => dispatch => {
    dispatch({
        type: SET_CLIENT,
        payload: clientData
    });
};
