import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './reducer';

type AppDispatch = typeof store.dispatch;
type RootState = ReturnType<typeof store.getState>;

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export type { AppDispatch, RootState };

export { store };
