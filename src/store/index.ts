import { combineReducers, configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({});

export const storeSetup = () => {
  return configureStore({
    reducer: {
      rootReducer,
    },
  });
};

export type AppStore = ReturnType<typeof storeSetup>;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = AppStore['dispatch'];
