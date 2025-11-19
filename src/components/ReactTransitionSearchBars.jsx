import React, { useState, useTransition } from 'react';

const ReactTransitionSearchBars = () => {
  const [text, setText] = useState('');
  const [results, setResults] = useState('');
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    setText(e.target.value);
    startTransition(() => {
      setResults(e.target.value);
    });
  };

  return (
    <div>
      <h2>React Transition Input</h2>
      <input type="text" value={text} onChange={handleChange} />
      {isPending ? <p>Loading...</p> : <p>Results : {results}</p>}
    </div>
  );
};
export default ReactTransitionSearchBars;
