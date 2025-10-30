import axios from 'axios';
import { useState, useEffect } from 'react';

const MainAxios = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data);
        setIsLoading(false);
      } catch (err) {
        setIsError(err.message);
        setIsLoading(false);
      }
    };
    fetchUsers();
  }, []);
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

export default MainAxios;
