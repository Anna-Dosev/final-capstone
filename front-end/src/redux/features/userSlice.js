import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchUser = createAsyncThunk('users/all', async ({email, password}) => {
  const response = await fetch('http://localhost:8080/auth/login', {
    method: "POST",
        body: JSON.stringify({ email, password }), 
        headers: {
          "Content-Type": "application/json",
        },
  });
  const data = await response.json();
  if (data.token) {
    localStorage.setItem('token', data.token)
  }
  // localStorage.getItem('token')
  return data;
});

export const userSlice = createSlice({
  name: 'user',
  initialState:{},
  reducers: {
    // login: (state, action) => {
    //   state.user = action.payload; //user will be updated by payload being passed in
    // },
    // logout: (state) => {
    //   state.user = null;
    // },
  },
  extraReducers(builder) {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      return action.payload;
    });
  }
});



export const {login, logout} = userSlice.actions;

export const selectUser = state => state.user;

export default userSlice.reducer;