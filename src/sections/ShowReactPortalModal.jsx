import { useState } from 'react';
import ReactPortalModals from '../components/ReactPortalModals';

const ShowReactPortalModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <h2>ShowModalPortal</h2>
      <button onClick={() => setIsOpen(true)}>Open Modals</button>

      <ReactPortalModals isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2>Contents</h2>
        <p>This content is rendered outside the modal components!</p>
      </ReactPortalModals>
    </div>
  );
};

export default ShowReactPortalModal;
