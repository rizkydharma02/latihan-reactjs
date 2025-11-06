import { useEffect } from 'react';
import { useUsersZustand } from '../app/useUsersZustand';
import axios from 'axios';

const UserListsZustandAxios = () => {
  const { users, isLoading, isError, setUsers, setIsLoading, setIsError } = useUsersZustand();

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
  }, [setIsError, setIsLoading, setUsers]);

  return (
    <>
      <h1>Main Axios with state management zustand</h1>
      <p>example call api with async await and library axios fetch api with zustand</p>

      {isLoading && <p>Loading...</p>}
      {isError && <p>Error : {isError}</p>}

      <ul>
        {users.slice(0, 5).map((user) => {
          return (
            <li key={user.id}>
              <p>
                <strong>{user.name}</strong> - {user.username} - {user.email}
              </p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UserListsZustandAxios;
