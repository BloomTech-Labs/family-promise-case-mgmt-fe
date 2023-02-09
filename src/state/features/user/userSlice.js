import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: '',
  nickname: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.email = action.payload.email;
      state.nickname = action.payload.nickname;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
