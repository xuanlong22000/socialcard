import { configureStore } from "@reduxjs/toolkit";
import postsReducer from '../features/Cards/CardSlice';
import revertReducer from '../features/Cards/RevertSlice';


export const store = configureStore({
  reducer: {
    posts: postsReducer,
    reverts: revertReducer
  },
});
