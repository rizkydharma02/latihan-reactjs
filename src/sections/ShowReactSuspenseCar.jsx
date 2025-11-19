import { lazy, Suspense } from 'react';
import ReactSuspenseCars from '../components/ReactSuspenseCars';
// import components using lazy
const CarsWithLazy = lazy(() => import('../components/ReactSuspenseCars'));

const ShowReactSuspenseCar = () => {
  return (
    <div>
      <h2>Show React load Suspense Car list</h2>
      <p>
        lazy() lets you load a component dynamically <br />
        Suspense shows a fallback while the component loads
      </p>

      <h3>React Suspense without lazy</h3>
      <Suspense fallback={<div>Loading...</div>}>
        <ReactSuspenseCars />
      </Suspense>
      <br />

      <h3>React Suspense with lazy</h3>
      <Suspense fallback={<div>Loading...</div>}>
        <CarsWithLazy />
      </Suspense>
    </div>
  );
};

export default ShowReactSuspenseCar;
