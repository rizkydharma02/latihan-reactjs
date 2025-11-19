import ReactCallbackCount from '../components/ReactCallbackCount';

const ShowReactCallbackCount = () => {
  return (
    <div>
      <h2>React Callback Count</h2>
      <p>This section demonstrates the use of useCallback for optimizing performance by memoizing callbacks functions</p>
      <ReactCallbackCount />
    </div>
  );
};

export default ShowReactCallbackCount;
