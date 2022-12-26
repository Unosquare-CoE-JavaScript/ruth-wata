import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    token: localStorage.getItem('token'),
    isLoggedIn: localStorage.getItem('token') ? true : false,
    currentUser: '',
  },
  reducers: {
    isLoggedIn: (state) => {
      state.isLoggedIn = true;
    },
    addToken: (state, action) => {
      state.token = action.payload;
    },
    addUser: (state, action) => {
      state.currentUser = action.payload;
    },
    isLoggedOut: (state) => {
      state.isLoggedIn = false;
      state.token = localStorage.getItem('token');
      state.currentUser = '';
    },
  },
});

export const usersActions = usersSlice.actions;

export default usersSlice;
