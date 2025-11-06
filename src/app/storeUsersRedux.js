import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../features/users/usersSlice';

const storeUsersRedux = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export default storeUsersRedux;
