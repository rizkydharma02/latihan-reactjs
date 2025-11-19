import { memo, useCallback, useState } from 'react';

const Button = memo((props) => {
  const { onClick, text } = props;
  console.log(`Child ${text} button rendered`);
  return <button onClick={onClick}>{text}</button>;
});

const ReactCallbackCount = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(20);

  // These functions are memoized and only recreated when dependencies change
  const handleClick1 = useCallback(() => {
    console.log('rendering count increment');
    setCount1((prev) => prev + 1);
  }, [count1]);

  // These functions are memoized and only recreated when dependencies change
  const handleClick2 = useCallback(() => {
    console.log('rendering count decrement');
    setCount2((prev) => prev - 1);
  }, [count2]);
  return (
    <>
      <h3>With useCallback:</h3>
      <p>Count Increment: {count1}</p>
      <p>Count Decrement: {count2}</p>
      <Button onClick={handleClick1} text="Increment Count" />
      <Button onClick={handleClick2} text="Decrement Count" />
    </>
  );
};

export default ReactCallbackCount;
