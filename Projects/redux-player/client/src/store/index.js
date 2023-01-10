import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './usersSlice';
import postsReducer from './postsSlice';
import commentsReducer from './commentsSlice';

const store = configureStore({
  reducer: {
    users: usersReducer.reducer,
    // posts: postsReducer.reducer,
    // comments: commentsReducer.reducer
  },
});

export default store;
