import { useRef } from 'react';

const ReactRefInput = () => {
  const inputRef = useRef();
  const focusInput = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      <h2>React Ref Input</h2>
      <input type="text" ref={inputRef} />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};

export default ReactRefInput;
