import { useEffect, useRef, useState } from 'react';

const ReactRefStateChangeInput = () => {
  const [input, setInput] = useState('');
  const previousInput = useRef('');

  useEffect(() => {
    previousInput.current = input;
  });

  return (
    <div>
      <h2>React Ref State Change Input</h2>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <p>current value : {input}</p>
      <p>previous value : {previousInput.current}</p>
    </div>
  );
};
export default ReactRefStateChangeInput;
