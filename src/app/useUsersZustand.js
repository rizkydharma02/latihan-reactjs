import axios from 'axios';
import { create } from 'zustand';

export const useUsersZustand = create((set) => ({
  users: [],
  isLoading: true,
  isError: null,

  setUsers: (users) => set({ users }),
  setIsLoading: (isLoading) => set({ isLoading }),
  setIsError: (isError) => set({ isError }),

  fetchUsers: async () => {
    try {
      set({ isLoading: true, isError: null });
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      set({ users: response.data, isLoading: false });
    } catch (err) {
      set({ isError: err.message, isLoading: false });
    } finally {
      set({ isLoading: false });
    }
  },
}));
