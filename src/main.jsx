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
import ListReactForm from './sections/ListReactForm.jsx';
import ShowReactPortalModal from './sections/ShowReactPortalModal.jsx';
import ShowReactSuspenseCar from './sections/ShowReactSuspenseCar.jsx';
import ShowReactForwardRefInput from './sections/ShowReactForwardRefInput.jsx';
import ShowReactTransitionSearchBar from './sections/ShowReactTransitionSearchBar.jsx';
import ShowReactRefInput from './sections/ShowReactRefInput.jsx';
import ShowCustomHooksFetch from './sections/ShowCustomHooksFetch.jsx';
import ShowReactMemoCountTodos from './sections/ShowReactMemoCountTodos.jsx';
import ShowReactCallbackCount from './sections/ShowReactCallbackCount.jsx';

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
  {
    path: '/forms',
    element: <ListReactForm />,
  },
  {
    path: '/show-portal-modal',
    element: <ShowReactPortalModal />,
  },
  {
    path: '/show-suspense-car',
    element: <ShowReactSuspenseCar />,
  },
  {
    path: '/show-forward-ref-input',
    element: <ShowReactForwardRefInput />,
  },
  {
    path: '/show-transition-searchbar',
    element: <ShowReactTransitionSearchBar />,
  },
  {
    path: '/show-ref-input',
    element: <ShowReactRefInput />,
  },
  {
    path: '/show-custom-hooks-fetch',
    element: <ShowCustomHooksFetch />,
  },
  {
    path: '/show-memo-count-todos',
    element: <ShowReactMemoCountTodos />,
  },
  {
    path: '/show-callback-count',
    element: <ShowReactCallbackCount />,
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
