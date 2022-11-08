import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { movieAPI } from '../services/MovieService';
import filtersReducer from './reducers/FiltersSlice';
import loadReducer from './reducers/LoadSlice';
import paginationReducer from './reducers/PaginationSlice';

const rootReducer = combineReducers({
  filtersReducer,
  paginationReducer,
  loadReducer,
  [movieAPI.reducerPath]: movieAPI.reducer,
});

export const storeSetup = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(movieAPI.middleware),
  });
};

export type AppStore = ReturnType<typeof storeSetup>;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = AppStore['dispatch'];
