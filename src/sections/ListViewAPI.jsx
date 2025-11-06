import MainPromise from '../components/MainPromise';
import MainAsync from '../components/MainAsync';
import MainAxios from '../components/MainAxios';
import UserListsContext from '../components/UserListsContext';
import UserListsReduxAxios from '../components/UserListsReduxAxios';
import UserListsReduxThunk from '../components/UserListsReduxThunk';
import UserListsZustandAxios from '../components/UserListsZustandAxios';
import UserListsZustandAxiosBetter from '../components/UserListsZustandAxiosBetter';

const ListViewAPI = () => {
  return (
    <>
      <h2>ListView API</h2>
      <MainPromise />
      <MainAsync />
      <MainAxios />
      <UserListsContext />
      <UserListsReduxAxios />
      <UserListsReduxThunk />
      <UserListsZustandAxios />
      <UserListsZustandAxiosBetter />
    </>
  );
};

export default ListViewAPI;
