import { configureStore } from '@reduxjs/toolkit';
import {authReducer} from './auth/slice'
import { contactsReducer } from './contacts/contactsSlice';
import { filtersReducer } from './contacts/filterSlice';
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
import storage from 'redux-persist/lib/storage';


const authPersistConfig= {
  key: 'auth',
  storage,
  whitelist: ['token'],
};
export const store = configureStore({
  reducer: {
    contactsReducer,
    filtersReducer,
    auth: persistReducer(authPersistConfig, authReducer),

    // authReducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
devTools: process.env.NODE_ENV === 'development',
});
export const persistor = persistStore(store);
