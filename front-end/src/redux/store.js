import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/userSlice';
import registerReducer from './features/registerSlice';
import parksReducer from './features/parksSlice';
import isLoggedInReducer from './features/isLoggedInSlice';

export default configureStore({
    reducer: {
      user: userReducer,
      registrant: registerReducer,
      parks: parksReducer,
      isLoggedIn: isLoggedInReducer,
    }
  })