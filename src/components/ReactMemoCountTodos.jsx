import { memo, useMemo, useState } from 'react';

// Memoized Button component to prevent unnecessary re-renders
const Button = memo((props) => {
  const { onClick, text } = props;
  console.log(`Child ${text} button rendered`);
  return <button onClick={onClick}>{text}</button>;
});

const ReactMemoCountTodos = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const expensiveCalculation = (num) => {
    console.log('Calculating...');
    // simulation of a heavy calculation
    for (let i = 0; i < 1000000000; i++) {
      num += 1;
    }
    return num;
  };

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const addTodo = () => {
    setTodos((prev) => [...prev, 'New Todo']);
  };

  // useMemo is used to memoize the expensiveCalculation function
  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  return (
    <>
      <div>
        <h2>React Memo Count and Todos</h2>
        {todos.map((todo, index) => (
          <p key={index + 1}>{todo}</p>
        ))}
        <Button onClick={addTodo} text="Add Todo" />
      </div>
      <hr />
      <div>
        <h2> React Memo Count calculation</h2>
        <p>Count : {count}</p>
        <button onClick={increment}>Increase + </button>
        <p>Expensive Calculation</p>
        <p>{calculation}</p> // display the result of the expensive calculation use Memo
      </div>
    </>
  );
};

export default ReactMemoCountTodos;
