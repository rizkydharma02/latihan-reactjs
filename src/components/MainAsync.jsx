import { useEffect, useState } from 'react';

const MainAsync = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
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
      <h1>Main Async Await</h1>
      <p>example call api with async await and promise fetch</p>

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

export default MainAsync;
