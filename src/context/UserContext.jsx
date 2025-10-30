import { createContext } from 'react';

const UserContext = createContext({ users: [], isLoading: true, isError: null });

export default UserContext;
