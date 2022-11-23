import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchVerify = createAsyncThunk('users/verify', async (creds) => {
  if(!creds.email) return
  
  const { email, password, token } = creds;
  if(token) {
    const response = await fetch('http://localhost:8080/auth/verify', {
      method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
    });
    const data = await response.json();
    return data.isSuccess;
  } else {
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
  return data.isSuccess;
  }
})

export const isLoggedInSlice = createSlice({
    name: 'isLoggedIn',
    initialState: false,
    reducers: {
      doLogout: (state) => false,
    },
    extraReducers(builder) {
        builder.addCase(fetchVerify.fulfilled, (state, action) => {
          return action.payload;
        });
        builder.addCase(fetchVerify.rejected, (state, action) => {
          return action.payload;
        });
      }
  });

  export const selectIsLoggedIn = state => state.isLoggedIn;

  export const { doLogout } = isLoggedInSlice.actions;
  
  export default isLoggedInSlice.reducer;
  
 