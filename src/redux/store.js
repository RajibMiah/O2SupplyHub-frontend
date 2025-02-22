import { configureStore, combineReducers } from '@reduxjs/toolkit';
import authReducer from '@redux/slices/authSlice';
import selectionReducer from '@redux/slices/selectionSlice';
import uiReducer from '@redux/slices/uiSlice';
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

// Persist Configuration (Only for auth)
const persistConfig = {
   key: 'auth',
   storage,
   whitelist: ['auth'], // Persist only auth state
};

// Combine Reducers Correctly
const rootReducer = combineReducers({
   auth: authReducer, // Persisted Reducer
   selection: selectionReducer, // Non-Persisted Reducer
   ui: uiReducer, // Non-Persisted Reducer
});

// Wrap the auth reducer with persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure Store
export const store = configureStore({
   reducer: persistedReducer,
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
