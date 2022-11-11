import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchReg = createAsyncThunk('registrants/all', async () => {
  const response = await fetch('/register');
  const data = await response.json();
  return data;
});

export const registerSlice = createSlice({
  name: 'registrant',
  initialState:{},
  reducers: {
    register: (state, action) => {
      state.registrant = action.payload; //user will be updated by payload being passed in
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchReg.fulfilled, (state, action) => {
      return action.payload;
    });
  }
});


export const {register} = registerSlice.actions;

export const selectReg = state => state.reg;

export default registerSlice.reducer;