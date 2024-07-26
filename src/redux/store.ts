import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import counterReducer, { CounterState } from './reducer/counterSlice';
import { pokemonApi } from './api/pokemonApi';

// Define the shape of the overall application state
export interface AppState {
  counter: CounterState;
}

// Combine all reducers for the application into a single root reducer
const rootReducer = combineReducers({
  [pokemonApi.reducerPath]: pokemonApi.reducer,
  counter: counterReducer,
});

// Persist configuration
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['counter'], // only counter will be persisted
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the Redux store with the root reducer, middleware, and preloaded state
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(pokemonApi.middleware),
});

// Persistor
export const persistor = persistStore(store);

// Type definitions inferred from the configured store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
