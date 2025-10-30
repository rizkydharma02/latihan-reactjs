import './App.css';
import MainAsync from './components/MainAsync';
import MainAxios from './components/MainAxios';
import UserLists from './components/UserLists';
import UserProvider from './context/UserProvider';
import MainPromise from './components/MainPromise';

function App() {
  return (
    <UserProvider>
      <>
        <MainPromise />
        <MainAsync />
        <MainAxios />
        <UserLists />
      </>
    </UserProvider>
  );
}

export default App;
