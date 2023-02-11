import { configureStore } from '@reduxjs/toolkit';
import clients from './features/clients/clientsSlice';
import document from './features/clients/documentSlice';
import userReducer from './features/user/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    document: document,
    clients: clients,
  },
});
