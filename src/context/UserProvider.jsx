import axios from 'axios';
import { useEffect, useState } from 'react';
import UserContext from './UserContext';

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setIsLoading(true);
        setIsError(null);
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
