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
});

export default userSlice.reducer;
