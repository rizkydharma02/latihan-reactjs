import { useEffect, useState } from 'react';

const MainPromise = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Gagal mengambil data');
        }
        return res.json();
      })
      .then((data) => {
        setIsLoading(false);
        setUsers(data);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsError(err.message);
      });
  }, []);
  return (
    <>
      <h1>Main Promise</h1>
      <p>example call api with fetch promise only</p>

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

export default MainPromise;
