import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  success: false,
  url: '',
  documentType: '',
  extension: '',
};

const documentSlice = createSlice({
  name: 'documents',
  initialState, // not sure what the initialState should be.....
  reducers: {
    addDocument: (state, action) => {
      state.documentType = action.payload[0];
      state.name = action.payload[1].name;
      state.success = action.payload[1].success;
      state.url = action.payload[1].url;
      state.extension = action.payload[1].extension;
    },
    setDocuments: (state, action) => {},
    removeDocument: (state, action) => {},
  },
});

export default documentSlice.reducer;
