import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../features/users/usersSlice';
import todosReducer from '../features/todos/todosSlice';

const storeRedux = configureStore({
  reducer: {
    users: usersReducer,
    todos: todosReducer,
  },
});

export default storeRedux;
