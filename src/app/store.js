import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../features/api/apiSliec';
import filterReducers from '../features/filter/filter'

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]:apiSlice.reducer,
    filter:filterReducers
  },
  middleware:(getDefaultMiddleware)=> getDefaultMiddleware().concat(apiSlice.middleware)
});
