import { useEffect, useRef, useState } from 'react';

const ReactRefRenderCount = () => {
  const [input, setInput] = useState('');
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  }, [input]);

  return (
    <div>
      <h2>React Ref Render Count</h2>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <p>render count : {count.current}</p>
    </div>
  );
};

export default ReactRefRenderCount;
