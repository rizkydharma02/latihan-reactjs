import ReactMemoCountTodos from '../components/ReactMemoCountTodos';

const ShowReactMemoCountTodos = () => {
  return (
    <>
      <h2>React Memo Count</h2>
      <p>This section demonstrates the use of React.memo and useMemo for optimizing performance by memoizing expensive calculations and todos memoization button</p>

      <ReactMemoCountTodos />
    </>
  );
};

export default ShowReactMemoCountTodos;
