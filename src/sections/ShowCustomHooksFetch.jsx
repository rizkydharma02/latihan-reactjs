import UseFetch from '../components/UseFetch';

const ShowCustomHooksFetch = () => {
  const [data] = UseFetch('https://jsonplaceholder.typicode.com/todos');
  return (
    <>
      <h2>Custom Hooks Fetch</h2>
      <p>custom hooks fetch api from jsonplaceholder</p>
      {data &&
        data.slice(0, 4).map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </>
  );
};

export default ShowCustomHooksFetch;
