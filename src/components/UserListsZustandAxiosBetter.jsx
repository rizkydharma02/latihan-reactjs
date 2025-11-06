import { useEffect } from 'react';
import { useUsersZustand } from '../app/useUsersZustand';

const UserListsZustandAxiosBetter = () => {
  const { users, isLoading, isError, fetchUsers } = useUsersZustand();

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <>
      <h1>Main Axios with state management zustand with best practice</h1>
      <p>example call api with async await and library axios fetch api with zustand with best practice</p>

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

export default UserListsZustandAxiosBetter;
