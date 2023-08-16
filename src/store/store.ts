import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from 'store/rootState';
import thunk from 'redux-thunk';

// Create the Redux store
const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
