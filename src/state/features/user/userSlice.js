import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  email: '',
  nickname: '',
  email_verified: false,
  picture: '',
  sub: '',
  updated_at: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
