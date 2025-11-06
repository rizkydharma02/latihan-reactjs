import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { storeRedux, persistor } from './app/storeRedux.js';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import ListViewTodos from './sections/ListViewTodos';
import ListViewAPI from './sections/ListViewAPI.jsx';
import { PersistGate } from 'redux-persist/integration/react';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/todos',
    element: <ListViewTodos />,
  },
  {
    path: '/users',
    element: <ListViewAPI />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={storeRedux}>
      <PersistGate loading={null} persistor={persistor} />
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </StrictMode>
);
