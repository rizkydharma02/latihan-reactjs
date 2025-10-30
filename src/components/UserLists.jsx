import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const UserLists = () => {
  const { users, isLoading, isError } = useContext(UserContext);

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <p>Error : {isError}</p>;

  return (
    <>
      <h1>Main Axios</h1>
      <p>example call api with async await and library axios fetch api</p>

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

export default UserLists;
