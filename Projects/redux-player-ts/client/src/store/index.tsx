import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './userSlice';

const store = configureStore({
  reducer: {
    users: usersReducer.reducer,
    // posts: postsReducer.reducer,
    // comments: commentsReducer.reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
