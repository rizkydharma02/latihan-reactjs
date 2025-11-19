import { useRef } from 'react';
import ReactForwardRefInputs from '../components/ReactForwardRefInputs';

const ShowReactForwardRefInput = () => {
  const inputRef = useRef();
  const focusInput = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      <h2>Show React Forward Ref Input</h2>
      <p>forwardRef lets your component pass a reference to one of its children. It's like giving a direct reference to a DOM element inside your component.</p>
      <ReactForwardRefInputs ref={inputRef} />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};

export default ShowReactForwardRefInput;
