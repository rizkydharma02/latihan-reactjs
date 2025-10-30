import './App.css';
import MainAsync from './components/MainAsync';
import MainAxios from './components/MainAxios';
import UserListsContext from './components/UserListsContext';
import UserProvider from './context/UserProvider';
import MainPromise from './components/MainPromise';
import UserListsReduxThunk from './components/UserListsReduxThunk';
import UserListsReduxAxios from './components/UserListsReduxAxios';

function App() {
  return (
    <UserProvider>
      <>
        <MainPromise />
        <MainAsync />
        <MainAxios />
        <UserListsContext />
        <UserListsReduxThunk />
        <UserListsReduxAxios />
      </>
    </UserProvider>
  );
}

export default App;
