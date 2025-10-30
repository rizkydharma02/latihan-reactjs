import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const UserContext = createContext({ users: [], isLoading: true, isError: null });

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data);
      } catch (err) {
        setIsError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUsers();
  }, []);

  return <UserContext.Provider value={{ users, isLoading, isError }}>{children}</UserContext.Provider>;
};
