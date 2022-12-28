import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './index';

interface userState {
  token: string;
  isLoggedIn: boolean;
  currentUser: string;
}

const initialState: userState = {
  token: '',
  isLoggedIn: localStorage.getItem('token') ? true : false,
  currentUser: '',
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    isLoggedIn: (state) => {
      state.isLoggedIn = true;
    },
    addToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    addUser: (state, action: PayloadAction<string>) => {
      state.currentUser = action.payload;
    },
    isLoggedOut: (state) => {
      state.isLoggedIn = false;
      state.token = localStorage.getItem('token')!;
      state.currentUser = '';
    },
  },
});

export const usersActions = usersSlice.actions;

export const selectCount = (state: RootState) => state.users.token;

export default usersSlice;
