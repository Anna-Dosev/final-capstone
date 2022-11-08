import { createSlice } from '@reduxjs/toolkit'

// const initialState = {};

export const loginSlice = createSlice({
  name: 'login',
  initialState: {},
  reducers: {
    addLogin: (state, action) => ({
      ...state,
      ...action.payload
    }),
  },
});

export const { addLogin } = loginSlice.actions

export const selectLogin = (state) => state.login;

export default loginSlice.reducer