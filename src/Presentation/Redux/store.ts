import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { userReducer, detailReducer } from './reducer';

type AppDispatch = typeof store.dispatch;
type RootState = ReturnType<typeof store.getState>;

const store = configureStore({
  reducer: {
    user: userReducer,
    detail: detailReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),  

});

export type { AppDispatch, RootState };

export { store };
