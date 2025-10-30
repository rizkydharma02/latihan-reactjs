import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../features/users/usersSlice';

const UserListsReduxThunk = () => {
  const dispatch = useDispatch();
  const { users, isLoading, isError } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {isError}</p>;

  return (
    <>
      <h1>Main Axios with state management redux react and create async thunk</h1>
      <p>example call api with async await and library axios fetch api with redux react and create async thunk</p>

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

export default UserListsReduxThunk;
