import './App.css';
import UserProvider from './context/UserProvider';

function App() {
  return (
    <UserProvider>
      <>
        <h2>Welcome to Learn React</h2>
      </>
    </UserProvider>
  );
}

export default App;
