import './App.css';
import MainAsync from './components/MainAsync';
import MainAxios from './components/MainAxios';
import MainPromise from './components/MainPromise copy';
import UserLists from './components/UserLists';
import { UserProvider } from './context/UserProvider';

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
