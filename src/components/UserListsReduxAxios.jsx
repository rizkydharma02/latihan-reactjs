import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUsers, setIsLoading, setIsError } from '../features/users/usersSlice';
import axios from 'axios';

const UserListsReduxAxios = () => {
  const dispatch = useDispatch();
  const { users, isLoading, isError } = useSelector((state) => state.users);

  useEffect(() => {
    const fetchUsers = async () => {
      dispatch(setIsLoading(true));
      dispatch(setIsError(null));
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        dispatch(setUsers(response.data));
      } catch (err) {
        dispatch(setIsError(err.message));
      } finally {
        dispatch(setIsLoading(false));
      }
    };
    fetchUsers();
  }, [dispatch]);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {isError}</p>;

  return (
    <>
      <h1>Main Axios with state management redux react</h1>
      <p>example call api with async await and library axios fetch api with redux react</p>
      <ul>
        {users.slice(0, 5).map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> - {user.username} - {user.email}
          </li>
        ))}
      </ul>
    </>
  );
};

export default UserListsReduxAxios;
