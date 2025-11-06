import './App.css';
import MainAsync from './components/MainAsync';
import MainAxios from './components/MainAxios';
import UserListsContext from './components/UserListsContext';
import UserProvider from './context/UserProvider';
import MainPromise from './components/MainPromise';
import UserListsReduxThunk from './components/UserListsReduxThunk';
import UserListsReduxAxios from './components/UserListsReduxAxios';
import UserListsZustandAxios from './components/UserListsZustandAxios';
import UserListsZustandAxiosBetter from './components/UserListsZustandAxiosBetter';

function App() {
  return (
    <UserProvider>
      <>
        <MainPromise />
        <MainAsync />
        <MainAxios />
        <UserListsContext />
        <UserListsReduxAxios />
        <UserListsReduxThunk />
        <UserListsZustandAxios />
        <UserListsZustandAxiosBetter />
      </>
    </UserProvider>
  );
}

export default App;
