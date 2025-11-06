import { combineReducers, configureStore } from '@reduxjs/toolkit';
import usersReducer from '../features/users/usersSlice';
import todosReducer from '../features/todos/todosSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  users: usersReducer,
  todos: todosReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  version: 1,
  whitelist: ['todos'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// default store redux
export const storeRedux = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(storeRedux);
