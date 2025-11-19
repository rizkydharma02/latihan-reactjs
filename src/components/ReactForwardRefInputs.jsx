import { forwardRef } from 'react';

const ReactForwardRefInputs = forwardRef((props, ref) => {
  return (
    <div>
      <h2>React Forward Ref Inputs</h2>
      <input type="text" ref={ref} {...props} placeholder="Type something..." />
    </div>
  );
});
export default ReactForwardRefInputs;
