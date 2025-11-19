import ReactRefInput from '../components/ReactRefInput';
import ReactRefRenderCount from '../components/ReactRefRenderCount';
import ReactRefStateChangeInput from '../components/ReactRefStateChangeInput';

const ShowReactRefInput = () => {
  return (
    <>
      <h2>Show React Ref Input</h2>
      <p>The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
      <ReactRefInput />
      <ReactRefRenderCount />
      <ReactRefStateChangeInput />
    </>
  );
};

export default ShowReactRefInput;
