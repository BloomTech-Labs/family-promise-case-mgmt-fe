import { client } from '../actions';

const intialState = {
    id: 1,
    name: 'test',
    status: 'active',
};

export const reducer = (state = intialState, action) => {
    switch (action.type) {
        case client.SET_CLIENT:
            return {
                ...state,
                id: action.payload.id,
                name: action.payload.name,
                status: action.payload.status,
            };
        default:
            return state;
    };
};
