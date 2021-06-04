import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import credentialsReducer from './credentials/CredentialsReducer';

const rootReducer = combineReducers({
  credentials: credentialsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type TRootState = ReturnType<typeof store.getState>;

export type TAppDispatch = typeof store.dispatch;

export default store;
