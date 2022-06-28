import { configureStore } from "@reduxjs/toolkit";
import postsReducer from '../features/Cards/CardSlice';




export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});
