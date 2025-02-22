import { configureStore } from '@reduxjs/toolkit';
import authReducer from '@redux/slices/authSlice';
import selectionReducer from '@redux/slices/selectionSlice';
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
import storage from 'redux-persist/lib/storage'; // Local storage

// Persist Configuration
const persistConfig = {
   key: 'auth',
   storage,
   blacklist: ['selection'],
};

// Wrap the auth reducer with persistReducer
const persistedAuthReducer = persistReducer(persistConfig, authReducer);

// Configure Store
export const store = configureStore({
   reducer: {
      auth: persistedAuthReducer,
      selection: selectionReducer,
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
         },
      }),
});

// Persist Store
export const persistor = persistStore(store);
export default store;
