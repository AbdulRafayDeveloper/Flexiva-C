import { configureStore } from '@reduxjs/toolkit';
import userSlicer from '../features/userSlicer';

const store = configureStore({
  reducer: {
    user: userSlicer
  },
});

export default store;
