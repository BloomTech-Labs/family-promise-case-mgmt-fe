import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const url = `https://mocki.io/v1/12303c12-5fe2-42b4-843c-dd141d203cba`;

const initialState = {
  clients: [
    // {
    //   id: 'FP0001',
    //   first_name: 'Michael',
    //   last_name: 'Lawson',
    //   case_manager: 'James Browns',
    //   status: 'In Progress',
    // },
  ],
};

export const getClients = createAsyncThunk(async (name, thunkAPI) => {
  try {
    const resp = await axios(url);
    return resp.data;
  } catch (err) {
    return thunkAPI.rejectWithValue('something went wrong', err);
  }
});

const clientsSlice = createSlice({
  name: 'clients',
  initialState,
  reducers: {
    setClients: (state, action) => {
      state.clients = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getClients.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(getClients.rejected, (state, action) => {
        return state;
      });
  },
});

export const { setClients } = clientsSlice.actions;

export default clientsSlice.reducer;
