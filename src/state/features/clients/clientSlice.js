import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  household_id: 0,
  first_name: '',
  last_name: '',
  ssn: '',
  is_hoh: false,
  relation: '',
  education_level: '',
  gender_id: 0,
  ethnicity_id: 0,
};

const clientSlice = createSlice({
  name: '',
  initialState,
  reducers: {
    setClient: (state, action) => {},
  },
});
