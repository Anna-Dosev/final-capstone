import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchVerify = createAsyncThunk('users/verify', async (creds, { rejectWithValue }) => {
  
  
  const { email, password, token } = creds;
  

  if(token) {
    const response = await fetch('/auth/verify', {
      method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
    });
    const data = await response.json();
    return data.isSuccess ? 2 : 0;
  } else if (email && password) {
    const response = await fetch('/auth/login', {
    method: "POST",
        body: JSON.stringify({ email, password }), 
        headers: {
          "Content-Type": "application/json",
        },
  });
  const data = await response.json();
  if (data.token) {
    localStorage.setItem('token', data.token)
    // return data.isSuccess;
    return 2;
  }
  // return data.isSuccess;
  return rejectWithValue('There is a problem')
  }
})

export const isLoggedInSlice = createSlice({
    name: 'isLoggedIn',
    initialState: 0,
    reducers: {
      doLogout: (state) => 0,
    },
    extraReducers(builder) {
        builder.addCase(fetchVerify.fulfilled, (state, action) => {
          return action.payload;
        });
        builder.addCase(fetchVerify.rejected, (state, action) => {
          return 1;
        });
      }
  });

  export const selectIsLoggedIn = state => state.isLoggedIn;

  export const { doLogout } = isLoggedInSlice.actions;
  
  export default isLoggedInSlice.reducer;
  
 