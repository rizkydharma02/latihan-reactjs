import { use } from 'react';

const carsPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve(['Toyota', 'Honda', 'Suzuki', 'Daihatsu']);
  }, 3000);
});

const ReactSuspenseCars = () => {
  // using use to suspend the component until the promise is resolved
  const cars = use(carsPromise);

  return (
    <div>
      <h3>My Favorite brand cars</h3>
      <ul>
        {cars.map((car, index) => (
          <li key={index + 1}>{car}</li>
        ))}
      </ul>
    </div>
  );
};

export default ReactSuspenseCars;
