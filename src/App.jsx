import './App.css';
import MainAsync from './components/MainAsync';
import MainAxios from './components/MainAxios';
import UserListsContext from './components/UserListsContext';
import UserProvider from './context/UserProvider';
import MainPromise from './components/MainPromise';
import UserListsRedux from './components/UserListsRedux';

function App() {
  return (
    <UserProvider>
      <>
        <MainPromise />
        <MainAsync />
        <MainAxios />
        <UserListsContext />
        <UserListsRedux />
      </>
    </UserProvider>
  );
}

export default App;
